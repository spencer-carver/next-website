import { useState } from "react";

function constructKey(namespace: string, key: string): string {
    return `${ namespace }|${ key }`;
}

function getItem<ValueType>(key: string): ValueType | undefined {
    try {
        const item = localStorage.getItem(key);

        if (item.startsWith("{") || item.startsWith("[")) {
            return JSON.parse(item) as ValueType;
        }

        return item as ValueType;
    } catch (error) {
        // do nothing
    }

    return undefined;
}

function removeItem(key: string): void {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        // do nothing
    }
}

function setItem<ValueType>(key: string, value: ValueType): void {
    try {
        if (typeof value === "string") {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    } catch (error) {
        // do nothing
    }
}

/*
 * as of 1/28/2023 storage is now scoped
 */
export function migrateItem(oldKey: string, newKey: string): void {
    try {
        const value = localStorage.getItem(oldKey);
        if (value) {
            localStorage.setItem(newKey, value);
        }

        localStorage.removeItem(oldKey);
    } catch (error) {
        // do nothing
    }
}

export class StorageHandler {
    namespace: string;

    constructor(namespace: string) {
        this.namespace = namespace;
    }

    getItem<ValueType>(key: string) {
        migrateItem(key, constructKey(this.namespace, key));

        return getItem<ValueType>(constructKey(this.namespace, key));
    }

    removeItem(key: string) {
        removeItem(key);

        return removeItem(constructKey(this.namespace, key));
    }

    setItem<ValueType>(key: string, value: ValueType) {
        removeItem(key);

        return setItem<ValueType>(constructKey(this.namespace, key), value);
    }
};

function useStorage(namespace: string): StorageHandler {
    const [storage] = useState(new StorageHandler(namespace));

    return storage;
}

export default useStorage;
