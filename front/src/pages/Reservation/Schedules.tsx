import { addDays, endOfDay, format, isAfter, parse } from "date-fns";
import { useFormikContext } from "formik";
import { Box, Button } from "~/components"
import { IFormValues } from ".";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export const Schedules = () => {

  const { values, setFieldValue } = useFormikContext<IFormValues>();

  const navigate = useNavigate()

  const schedules: any = {
    Monday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    Tuesday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    Wednesday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    Thursday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    Friday: ["10:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    Saturday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
    Sunday: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
  }

  const translation: any = {
    Monday: "Segunda-feira",
    Tuesday: "Terça-feira",
    Wednesday: "Quarta-feira",
    Thursday: "Quinta-feira",
    Friday: "Sexta-feira",
    Saturday: "Sábado",
    Sunday: "Domingo",
  }

  const currentDayOfWeek = format(new Date(), "EEEE");

  const filteredSchedules = Object.fromEntries(
    Object.entries(schedules).filter(([day]) => Object.keys(schedules).indexOf(day) >= Object.keys(schedules).indexOf(currentDayOfWeek))
  )

  const disable = (date: string, day: string) => {
    const scheduleTime = parse(date, "HH:mm", new Date());

    if (day === currentDayOfWeek) {
      return isAfter(scheduleTime, new Date()) 
    }

    return true
  }

  const check = (hour: string, day: string) => {
    if (values.reservation_date && format(values.reservation_date, "EEEE") === day && format(values.reservation_date, "HH:ss") === hour) {
      return true
    }

    return false
  }

  const select = (schedule: string, day: string) => {

    let daysKeys = Object.keys(schedules)

    let indexOne = daysKeys.indexOf(currentDayOfWeek) + 1
    let indexTwo = daysKeys.indexOf(day) + 1

    let daysDif = Math.abs(indexOne - indexTwo)

    setFieldValue("reservation_date", `${format(addDays(new Date(), daysDif), "yyyy-MM-dd")} ${schedule}`)
  }

  const nextStep = () => {
    setFieldValue("step", 2)
  }

  const cancel = () => {
    navigate("/")
  }

  return (
    <Box className="grid gap-5 p-2">
      {Object.keys(filteredSchedules).map((day, key) => (
        <Box className="grid gap-2" key={key}>
          <h3 className="uppercase text-damask-800">{translation[day]}</h3>

          <Box className="grid grid-cols-8 gap-2">
            {schedules[day].map((schedule: string, key: number) => (
              <Box className={`p-2 text-center rounded-sm border border-damask-200 hover:bg-damask-200 cursor-pointer text-damask-800 ${disable(schedule, day) ?? "border-none bg-slate-100/50"} ${check(schedule, day) && "bg-damask-200"}`} key={key} onClick={() => select(schedule, day)}>
                {schedule}
              </Box>
            ))}
          </Box>
        </Box>
      ))}

      <Box className="grid grid-cols-4">
        <Button className="col-start-1 flex gap-2 justify-center items-center" style="secondary" type="button" onClick={cancel}>
          <GrLinkPrevious />
          Voltar para a página inicial
        </Button>

        <Button className="col-start-4 flex gap-2 justify-center items-center" style="secondary" type="button" onClick={nextStep} active={values.reservation_date ? true : false}>
          Escolher mesa
          <GrLinkNext />
        </Button>
      </Box>
    </Box>
  )
} 