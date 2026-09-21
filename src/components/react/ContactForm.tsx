import { useState, type FormEvent } from 'react'
import type { ContactFormFields, ContactOption, ContactSuccessContent } from '../../lib/contact'

interface Props {
  options: ContactOption[]
  defaultOptionIndex: number
  fields: ContactFormFields
  success: ContactSuccessContent
  portfolioHref: string
}

export default function ContactForm({ options, defaultOptionIndex, fields, success, portfolioHref }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(defaultOptionIndex)
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setSubmittedName(String(data.get('name') ?? ''))
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    const firstName = submittedName.trim().split(' ')[0]
    const greeting = firstName ? success.greetingWithName.replace('{name}', firstName) : success.greetingDefault
    const selected = options[selectedIndex]

    return (
      <div className="max-w-[52ch]">
        <span className="mb-8 block h-2.5 w-24 bg-[var(--accent)]" />
        <h2 className="text-pretty font-[family-name:var(--display)] text-[2.6rem] leading-[1.05] font-normal text-[var(--text-h)]">
          {greeting}
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--text)]">
          {success.bodyBefore}
          <strong className="text-[var(--text-h)]">{selected.responsible}</strong>
          {success.bodyAfter}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--text)] opacity-70">{success.urgentNote}</p>
        <a
          href={portfolioHref}
          className="mt-10 inline-block bg-[var(--text-h)] px-7 py-4.5 text-[13px] font-bold tracking-[0.14em] text-white uppercase hover:bg-[var(--accent)]"
        >
          {success.ctaLabel}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-[60ch] flex-col gap-9">
      <div>
        <span className="mb-3.5 block text-[11px] font-semibold tracking-[0.16em] text-[var(--text)] opacity-70 uppercase">
          {fields.needLabel}
        </span>
        <div
          role="radiogroup"
          aria-label={fields.needLabel}
          className="grid grid-cols-1 gap-px border-2 border-[var(--text-h)] bg-[var(--text-h)] sm:grid-cols-2"
        >
          {options.map((option, index) => {
            const selected = index === selectedIndex
            return (
              <button
                key={option.key}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => setSelectedIndex(index)}
                className={`flex flex-col gap-1.5 px-5 py-4.5 text-left transition-colors ${
                  selected ? 'bg-[var(--text-h)] text-white' : 'bg-[var(--bg)] text-[var(--text-h)]'
                }`}
              >
                <span className="text-[15px] font-bold">{option.label}</span>
                <span className="text-[13px] opacity-75">{option.note}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="block text-[11px] font-semibold tracking-[0.16em] text-[var(--text)] opacity-70 uppercase">
            {fields.nameLabel}
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder={fields.namePlaceholder}
            className="border-0 border-b-2 border-[var(--text-h)] bg-transparent px-0 py-3 text-[17px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="block text-[11px] font-semibold tracking-[0.16em] text-[var(--text)] opacity-70 uppercase">
            {fields.companyLabel} <span className="font-normal tracking-normal normal-case opacity-80">{fields.companyOptionalNote}</span>
          </span>
          <input
            name="company"
            type="text"
            placeholder={fields.companyPlaceholder}
            className="border-0 border-b-2 border-[var(--text-h)] bg-transparent px-0 py-3 text-[17px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="block text-[11px] font-semibold tracking-[0.16em] text-[var(--text)] opacity-70 uppercase">
            {fields.emailLabel}
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder={fields.emailPlaceholder}
            className="border-0 border-b-2 border-[var(--text-h)] bg-transparent px-0 py-3 text-[17px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="block text-[11px] font-semibold tracking-[0.16em] text-[var(--text)] opacity-70 uppercase">
            {fields.phoneLabel} <span className="font-normal tracking-normal normal-case opacity-80">{fields.phoneOptionalNote}</span>
          </span>
          <input
            name="phone"
            type="tel"
            placeholder={fields.phonePlaceholder}
            className="border-0 border-b-2 border-[var(--text-h)] bg-transparent px-0 py-3 text-[17px] text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:outline-none"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="block text-[11px] font-semibold tracking-[0.16em] text-[var(--text)] opacity-70 uppercase">
          {fields.messageLabel}
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder={fields.messagePlaceholder}
          className="resize-y border-2 border-[var(--text-h)] bg-transparent px-4 py-4 text-[17px] leading-relaxed text-[var(--text-h)] placeholder:text-[var(--text)]/60 focus:outline-none"
        />
      </label>

      <div className="flex flex-wrap items-center gap-7">
        <button
          type="submit"
          className="cursor-pointer border-0 bg-[var(--accent)] px-7 py-4.5 text-left text-[13px] font-bold tracking-[0.14em] text-white uppercase hover:opacity-90"
        >
          {fields.submitLabel}
        </button>
        <span className="text-[13px] text-[var(--text)] opacity-70">{fields.submitNote}</span>
      </div>
    </form>
  )
}
