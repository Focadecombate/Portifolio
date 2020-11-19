export type themeOptions = "light" | "dark";
export type languageOptions = "english" | "portuguese";

export interface DefaultProps {
    language: languageOptions;
    theme: themeOptions;
}

export interface HabilidadeText {
    name: string;
    progress: number;
    description: string;
}

export interface TextoLinhaTempo {
    esquerda?: string;
    direita?: string;
}
export interface TextosLinhaTempo {
    textos: TextoLinhaTempo[]
}