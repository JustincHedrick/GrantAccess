import Slider from '@mui/material/Slider';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function FundingSlider({ fundingOptions, funding, setFunding }) {
  const handleSliderChange = (event, newValue) => {
    setFunding([...newValue]);
  };

  return (
    <section className="rounded border-1 border-neutral-50 px-2 pb-4">
      <h2 className="text-2xl font-semibold mb-2 pt-2">Funding Amount</h2>
      <section className="px-6">
        <Slider
          min={fundingOptions[0]}
          step={fundingOptions[2]}
          max={fundingOptions[1]}
          getAriaLabel={() => 'Funding range'}
          value={funding}
          onChange={handleSliderChange}
          // valueLabelDisplay="auto"
          // getAriaValueText={valuetext}
          // className={'text-primary-50'}
          sx={{
            color: '#23BD8B',
            '& .MuiSlider-thumb': {
              backgroundColor: '#0F382A'
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#C6DED6'
            }
          }}
        />
        <section className="flex justify-between text-shade-1">
          <p>{currencyFormatter.format(funding[0])}</p>
          <p>{currencyFormatter.format(funding[1])}</p>
        </section>
      </section>
    </section>
  )
}