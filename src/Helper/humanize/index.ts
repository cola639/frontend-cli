export const HumanizeChoices = {
    get: (
        choice: string,
        projectType?: string,
    ): { title: string; description: string; value: string } => {
        // choice core-plugins文件名
        switch (choice) {
            case "react":
                return {
                    title: "React",
                    description: "Creates a React CRA project",
                    value: choice,
                };
            case "react-h5-template":
                return {
                    title: "React H5 Template",
                    description: "Creates a React H5 TS template",
                    value: choice,
                };

            // case "nextjs":
            //     return {
            //         title: "NextJS",
            //         description: "Creates a Next.js project",
            //         value: choice,
            //     };
            // case "refine-vite":
            //     return {
            //         title: projectType === "refine" ? "Vite" : "refine (Vite)",
            //         description: "Creates a refine React Vite project.",
            //         value: choice,
            //     };
            // case "refine-nextjs":
            //     return {
            //         title:
            //             projectType === "refine"
            //                 ? "Next.js"
            //                 : "refine (Next.js)",
            //         description:
            //             "Creates a refine Next.js project with SSR support.",
            //         value: choice,
            //     };
            // case "refine-remix":
            //     return {
            //         title:
            //             projectType === "refine" ? "Remix" : "refine (Remix)",
            //         description:
            //             "Creates a refine Remix project with SSR support",
            //         value: choice,
            //     };
            // case "refine-react":
            //     return {
            //         title:
            //             projectType === "refine"
            //                 ? "CRA [Legacy]"
            //                 : "refine (CRA) [Legacy]",
            //         description: "Creates a basic refine project",
            //         value: choice,
            //     };

            default:
                return {
                    title: choice,
                    description: "",
                    value: choice,
                };
        }
    },
};
