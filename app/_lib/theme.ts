'use server'

import { cookies } from "next/headers"

export async function setTheme(mode: 'dark' | 'light') {
  cookies().set('theme', mode)
}