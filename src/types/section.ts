import { type HTMLElementType, type PropsWithChildren } from "react"

type SectionPropsRaw = {
    as?: HTMLElementType
    className?: string;
} 

export type SectionProps = PropsWithChildren<SectionPropsRaw>