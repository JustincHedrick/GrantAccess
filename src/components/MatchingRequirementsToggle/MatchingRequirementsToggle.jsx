import { Switch } from "@mui/material";
export default function MatchingRequirementsToggle({ matchingRequirements, setMatchingRequirements }) {
  function handleChange() {
    setMatchingRequirements(matchingRequirements === 'no' ? 'yes' : 'no');
  }
  return (
    <section className="rounded border-1 border-neutral-50 px-2 py-2">
      <section className="flex items-center gap-1">
        <h2 className="text-lg font-semibold">Matching Requirements?</h2>
        <Switch
          sx={{
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                '& + .MuiSwitch-track': {
                  backgroundColor: '#23BD8B',
                  opacity: 1
                }
              }
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: 'white',
              border: 1,
              borderColor: '#DDDEDF'
            }
          }}
          checked={matchingRequirements === 'yes'}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </section>
    </section>
  )
}