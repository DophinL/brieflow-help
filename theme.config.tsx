import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
    logo: (
      <Image src="/images/logo_with_text.png" alt="" width={128.8} height={42}></Image>
    ),
    // project: {
    //     link: "https://github.com/shuding/nextra-docs-template",
    // },
    // chat: {
    //     link: "https://discord.com",
    // },
    docsRepositoryBase: "https://github.com/DophinL/brieflow-help",
    footer: {
        text: "Build with ❤️",
    },
};

export default config;
