/** The 20 approved combinations from "Guía de Sistema de Color Variable" (Tudi_Guia_Sistema_Color.pdf). */
export interface ColorCombo {
  background: string
  principal: string
  accent: string
  usage: 'frequent' | 'occasional'
}

export const colorSystem: ColorCombo[] = [
  { background: '#20343D', principal: '#FFFFFF', accent: '#FF541C', usage: 'frequent' },
  { background: '#520B75', principal: '#FFFFFF', accent: '#03E0BD', usage: 'frequent' },
  { background: '#520B75', principal: '#FFFFFF', accent: '#AEF958', usage: 'frequent' },
  { background: '#E5316E', principal: '#FBE6ED', accent: '#94D505', usage: 'occasional' },
  { background: '#FDC963', principal: '#F66127', accent: '#ED293D', usage: 'occasional' },
  { background: '#056983', principal: '#FFFFFF', accent: '#FCF103', usage: 'frequent' },
  { background: '#20343D', principal: '#FFFFFF', accent: '#F0BD0A', usage: 'frequent' },
  { background: '#01366A', principal: '#FFFFFF', accent: '#FFB508', usage: 'frequent' },
  { background: '#025F71', principal: '#FFFFFF', accent: '#FA6602', usage: 'occasional' },
  { background: '#31285F', principal: '#19FFE2', accent: '#FE3A3C', usage: 'frequent' },
  { background: '#203E3C', principal: '#FFFFFF', accent: '#F0BD0A', usage: 'frequent' },
  { background: '#DF246B', principal: '#FFFFFF', accent: '#FEB254', usage: 'occasional' },
  { background: '#1E3B73', principal: '#FFFFFF', accent: '#8BB2B9', usage: 'frequent' },
  { background: '#ED293D', principal: '#FFFFFF', accent: '#FFB42B', usage: 'occasional' },
  { background: '#433789', principal: '#19FFE2', accent: '#FF3B3C', usage: 'occasional' },
  { background: '#611A66', principal: '#FFFFFF', accent: '#19FAC2', usage: 'frequent' },
  { background: '#193A65', principal: '#FFFFFF', accent: '#FA1955', usage: 'occasional' },
  { background: '#611A66', principal: '#FFFFFF', accent: '#F9D119', usage: 'frequent' },
  { background: '#8A01ED', principal: '#FFFFFF', accent: '#94D505', usage: 'frequent' },
  { background: '#31285F', principal: '#FE3A3C', accent: '#19FFE2', usage: 'occasional' },
]

/** Deterministic label -> combo mapping, so the same tool name always gets the same color. */
export function getColorForLabel(label: string): ColorCombo {
  let hash = 0
  for (let i = 0; i < label.length; i++) {
    hash = (hash * 31 + label.charCodeAt(i)) >>> 0
  }
  return colorSystem[hash % colorSystem.length]
}
