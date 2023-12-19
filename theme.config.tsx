import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
// import { useRouter } from "next/router";

const config: DocsThemeConfig = {
    logo: (
        <Image
            src="/images/logo_with_text.png"
            alt=""
            width={128.8}
            height={42}
        ></Image>
    ),
    // project: {
    //     link: "https://github.com/shuding/nextra-docs-template",
    // },
    // chat: {
    //     link: "https://discord.com",
    // },
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta
                property="og:description"
                content="An AI-Powered tool that subscribes to RSS feeds and automatically creates concise digests for efficient information consumption."
            />
            <meta
                property="keywords"
                content="Brieflow, RSS digest, information summary, AI-powered content, news aggregation, efficient reading, personalized news, Docs, Help Center, Support"
            />
            <link rel="icon" href="/favicon.svg" />
        </>
    ),
    docsRepositoryBase: "https://github.com/DophinL/brieflow-help/tree/main",
    footer: {
        text: "Build with ❤️",
    },
    useNextSeoProps() {
        // const { asPath } = useRouter();
        // if (asPath !== "/") {
            return {
                titleTemplate: "%s – Brieflow Docs",
            };
        // }
    },
};

export default config;
