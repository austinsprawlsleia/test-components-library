import React from 'react'
import PropTypes from 'prop-types'
import ThemeStyles from './FieldStyles'
import TextField from '@material-ui/core/TextField'

const Component = ({
  label, name, type, register, required, defaultValue, helperText, pattern,
  errors, autoComplete, isLightTheme
}) => {
  const classes = ThemeStyles(isLightTheme)
  return (
    <TextField
      className={classes.root}
      label={label}
      name={name}
      autoComplete={autoComplete || 'off'}
      defaultValue={defaultValue}
      type={type || 'text'}
      inputRef={register({ required, pattern })}
      error={!!errors[name]}
      helperText={helperText}
      variant="outlined"
    />
  )
}

Component.propTypes = {
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  helperText: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  pattern: PropTypes.any,
  errors: PropTypes.object,
  autoComplete: PropTypes.string,
  isLightTheme: PropTypes.bool
}

export default Component