import { FC, PropsWithChildren } from 'react'

export type FCWithChildren<T = {}> = FC<PropsWithChildren<T>>

export type FCWithClassName<T = {}> = FC<{ className?: string } & T>

export type FCWithCAndCN<T = {}> = FC<PropsWithChildren<{ className?: string } & T>>
