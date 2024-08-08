// react + ts

import { DateRangePicker } from 'rsuite';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import 'rsuite/DateRangePicker/styles/index.css';
import dayjs from 'dayjs'

interface FormData {
  dateRange: [Date | null, Date | null];
  start_date?: string;
  end_date?: string;
}

const App: React.FC = () => {

  const { handleSubmit, formState: { errors }, control } = useForm<FormData>();


  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    if (formData.dateRange) {
      formData.start_date = formData.dateRange[0] ? dayjs(formData.dateRange[0]).format("YYYY/MM/DD") : undefined;
      formData.end_date = formData.dateRange[0] ? dayjs(formData.dateRange[1]).format("YYYY/MM/DD") : undefined;
    }
    console.log(formData.start_date)
    console.log(formData.end_date)
  }


  return (
    <>
      <form className='WorkOrderListItems' onSubmit={handleSubmit(onSubmit)}>
        <div className='dateBox'>
          <label htmlFor="">下料日期:</label>
          <Controller
            control={control}
            name="dateRange"
            rules={{ required: '日期為必填' }}
            render={({ field: { onChange, onBlur } }) => (
              <DateRangePicker
                className='timeBox'
                size='md'
                showOneCalendar
                onChange={onChange}
                style={{ width: 323 }}
                onBlur={onBlur}

              />
            )}
          />
          {errors.dateRange && <span className='errorsmsg'>日期為必填</span>}
        </div>
        <button type='submit'>按鈕</button>
      </form>
    </>
  )
}

export default App
