import React, { FunctionComponent, useEffect, useState } from "react";
import { PageProps } from "../../@types/global";
import { API_URL } from "../../constants/ExternalUrls";
import fetchFromCache from "../../utils/cache";

const BlogIndex: FunctionComponent<PageProps> = ({ setLoading }) => {
    const [ posts, setPosts ] = useState([] as string[]);

    useEffect(() => {
        setLoading(true);
        fetchFromCache(`${ API_URL }/api/blog`).then((data) => {
            setPosts(data as unknown as string[]);
            setLoading(false);
        });
    }, []);

    if (!posts.length) {
        return null;
    }

    return (
        <ul style={ { marginBottom: "calc(100vh - 200px)" } }>
            { posts.map((post, index) => <a key={ index } href={ `/blog/${ post }` }><li>{ post }</li></a>) }
        </ul>
    );
};

export default BlogIndex;
