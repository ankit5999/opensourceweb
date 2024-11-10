// utils.ts

// `cn` function to handle conditional and dynamic class names
export function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}
