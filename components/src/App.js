import './App.css';
import { TextField } from '@material-ui/core'
import { Autocomplete  } from '@material-ui/lab'

export const AutoComplete = (props)  => {
  const {
    onSelect,
    onInputChange,
    options
  } = props;
  return (
    <div className="App">
      <Autocomplete
       freeSolo
        multiple
        options={options}
        getOptionLabel={option => option.title}
        onChange={onSelect} // click on the show tags
        onInputChange={onInputChange} //** on every input change hitting my api**
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
            margin="normal"
            fullWidth
          />
        )}
      />

    </div>
  );
}


