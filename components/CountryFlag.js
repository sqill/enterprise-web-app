import ReactCountryFlag from 'react-country-flag'

export default function CountryFlag({ code, className = "text-2xl" }) {
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
  const name = regionNamesInEnglish.of(code)

  return (
    <ReactCountryFlag
      svg
      className={className}
      countryCode={code}
      title={name}
      aria-label={name}
    />
  )
}