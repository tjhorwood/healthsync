import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Strip trailing slashes so route paths compare equal regardless of `trailingSlash`. */
export function normalizePath(path: string) {
  return path.replace(/\/+$/, '') || '/';
}
