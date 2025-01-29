import { Input } from '@chakra-ui/react'
import { forwardRef, Ref } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { PatternFormat, PatternFormatProps } from 'react-number-format'

interface IPatternFormatFieldProps extends PatternFormatProps {
  name: string
}

const PatternFormatField = forwardRef((props: IPatternFormatFieldProps, _ref: Ref<HTMLInputElement>) => {
  const { name, ...rest } = props
  const { control } = useFormContext()

  return (
    <Controller
      render={({ field: { ref, ...field } }) => (
        <PatternFormat
          {...rest}
          customInput={Input}
          size="md"
          getInputRef={ref}
          onValueChange={(values) => {
            const { value } = values
            field.onChange(value)
          }}
          value={field.value}
        />
      )}
      name={name}
      control={control}
    />
  )
})

PatternFormatField.displayName = 'PatternFormatField'

export default PatternFormatField
