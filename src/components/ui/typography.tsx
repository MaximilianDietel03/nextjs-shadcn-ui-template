import { cn } from "@/lib/utils"
import { FC, HTMLAttributes } from "react"

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {}

const TypographyH1: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h1 className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}>
      {children}
    </h1>
  )
}

const TypographyH2: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h2 className={cn("mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700", className)}>
      {children}
    </h2>
  )
}

const TypographyH3: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h3 className={cn("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
      {children}
    </h3>
  )
}

const TypographyH4: FC<TypographyProps> = ({ children, className }) => {
  return (
    <h4 className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className)}>
      {children}
    </h4>
  )
}

const TypographyP: FC<TypographyProps> = ({ children, className }) => {
  return (
    <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
      {children}
    </p>
  )
}

const TypographyBlockquote: FC<TypographyProps> = ({ children, className }) => {
  return (
    <blockquote className={cn("mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200", className)}>
      {children}
    </blockquote>
  )
}

const TypographyTable: FC<TypographyProps> = ({ children, className }) => {
  return (
    <div className={cn("my-6 w-full overflow-y-auto", className)}>
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Kings Treasury
            </th>
            <th className="border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Peoples happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800">
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t border-slate-200 p-0 even:bg-slate-100 dark:border-slate-600 dark:even:bg-slate-800">
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const TypographyList: FC<TypographyProps> = ({ children, className }) => {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  )
}

const TypographyInlineCode: FC<TypographyProps> = ({ children, className }) => {
  return (
    <code className={cn("relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400", className)}>
      {children}
    </code>
  )
}

const TypographyLead: FC<TypographyProps> = ({ children, className }) => {
  return (
    <p className={cn("text-xl text-slate-700 dark:text-slate-400", className)}>
      {children}
    </p>
  )
}

const TypographyLarge: FC<TypographyProps> = ({ children, className }) => {
  return (
    <div className={cn("text-lg font-semibold text-slate-900 dark:text-slate-50", className)}>
      {children}
    </div>
  )
}

const TypographySmall: FC<TypographyProps> = ({ children, className }) => {
  return (
    <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>
  )
}

const TypographySubtle: FC<TypographyProps> = ({ children, className }) => {
  return (
    <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)}>
      {children}
    </p>
  )
}

export const Typography = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  p: TypographyP,
  blockquote: TypographyBlockquote,
  table: TypographyTable,
  list: TypographyList,
  inlineCode: TypographyInlineCode,
  lead: TypographyLead,
  large: TypographyLarge,
  small: TypographySmall,
  subtle: TypographySubtle,
}
