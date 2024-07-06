import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import schemas from './sanity/schemas';

const config = defineConfig({

    projectId: "oj5x0nki",
    dataset: "production",
    title: "Scaper",
    apiVersion: "2024-05-28",
    basePath: "/admin",
    plugins: [structureTool(), visionTool()],
    schema: { types: schemas }

});

export default config;
