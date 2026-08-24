export const EN_TO_ES = {
  '/': '/es',
  '/about-us': '/es/about-us',
  '/our-services': '/es/our-services',
  '/cultural-compass': '/es/cultural-compass',
  '/cultural-apapacho': '/es/cultural-apapacho',
  '/our-ceo': '/es/our-ceo',
}

export const ES_TO_EN = Object.fromEntries(
  Object.entries(EN_TO_ES).map(([en, es]) => [es, en])
)
