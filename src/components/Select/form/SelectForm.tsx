import { forwardRef, Ref } from 'react';
import { Controller, useFormContext } from 'react-hook-form'
import {  GroupBase, Props } from 'react-select'
import Select from '~/components/Select'
import { Option } from '~/types/select';


const SelectForm = forwardRef(<T extends Option,>(props: Omit<Props<T, boolean, GroupBase<T>>, 'options'> & {options: T[]},  ref: Ref<unknown>) => {
    
    const { options, name } = props;

    const { control } = useFormContext()

  return (
    <Controller
      render={({ field }) => {
      return <Select 
       {...props}
        {...field}
        ref={ref}
        value={options?.filter((option) => option.value === field.value)}
        onChange={(selectedOption: Option) =>
          field.onChange(selectedOption.value)
        }
      />
      }}
      name={name}
      control={control}
    />
  )
})

export default SelectForm
