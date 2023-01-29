const BROWSER_CACHE_TTL = 14400000; // 4 hours

async function fetchData(url: string): Promise<JSON> {
    return await window.fetch(url)
        .then((response) => { 
            if (!response.ok) {
                throw new Error("request failed");
            }

            return response.json();
        }).catch(() => ({} as JSON));
}

/*
 * Data based fetches no longer cached in localStorage as of 1/28/2023, this will clean up older entries, to be removed later
 */
function invalidateFetchCacheItems() {
    const now = (new Date()).getTime();
    const cachedDataItems = Object.keys(localStorage).filter((name) => name.startsWith("https"));

    cachedDataItems.map((item) => {
        try {
            const { time } = JSON.parse(localStorage.getItem(item));

            if (!time || now - time > BROWSER_CACHE_TTL) {
                localStorage.removeItem(item);
            }
        } catch (e) {
            // do nothing
        }
    });
}

export function invalidateExpiredCacheItems() {
    invalidateFetchCacheItems();
};

export default fetchData;
