import { useMutation } from '@tanstack/react-query'
import teacherService from '../services/teacher.service'
import { TTeacherFormInput } from '../schema/teachers';


const useCreateTeacher = (options?: object) => {
  const { mutateAsync } = useMutation( ({ id, data }: {id: string, data: TTeacherFormInput}) => teacherService.create(id, data), options);

  const createTeacher = async (id: string, data: TTeacherFormInput) => {
    await mutateAsync({ id, data });
  }

  return {createTeacher}
}

export default useCreateTeacher;
