"use client";

import React from "react";

const useMedia = (query: string): boolean => {
	const [matches, setMatches] = React.useState<boolean>(false);

	React.useEffect(() => {
		const mediaQuery = window.matchMedia(query);

		const handleMediaChange = (event: MediaQueryListEvent): void => {
			setMatches(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaChange);

		setMatches(mediaQuery.matches);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaChange);
		};
	}, [query]);

	return matches;
};

export default useMedia;
