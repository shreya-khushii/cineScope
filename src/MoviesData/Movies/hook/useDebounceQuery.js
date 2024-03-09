/* eslint-disable react-hooks/exhaustive-deps */
import { debounce } from "lodash";
import { useCallback, useState } from "react";

const useDebounceQuery = () => {
    const [query, setQuery] = useState("");

    const request = debounce((value) => {
        setQuery(value);
    }, 600);

    const debounceQuery = useCallback((value) => request(value), []);

    return { debounceQuery, query };
};

export default useDebounceQuery;
