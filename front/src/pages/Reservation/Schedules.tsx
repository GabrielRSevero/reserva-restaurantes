import { addDays, endOfDay, format, isAfter, parse } from "date-fns";
import { useFormikContext } from "formik";
import { Box } from "~/components"
import { IFormValues } from ".";

export const Schedules = () => {

  const { setFieldValue } = useFormikContext<IFormValues>();

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

  const check = (date: string, day: string) => {
    const scheduleTime = parse(date, "HH:mm", new Date());

    if (day === currentDayOfWeek) {
      return isAfter(scheduleTime, new Date()) 
    }

    return true
  }

  const select = (schedule: string, day: string) => {

    let daysKeys = Object.keys(schedules)

    let indexOne = daysKeys.indexOf(currentDayOfWeek) + 1
    let indexTwo = daysKeys.indexOf(day) + 1

    let daysDif = Math.abs(indexOne - indexTwo)

    setFieldValue("reservation_date", `${format(addDays(new Date(), daysDif), "yyyy-MM-dd")} ${schedule}`)
    setFieldValue("step", 2)
  }

  return (
    <Box className="grid gap-5">
      {Object.keys(filteredSchedules).map((day, key) => (
        <Box className="grid gap-2" key={key}>
          <h3 className="uppercase text-white">{translation[day]}</h3>

          <Box className="grid grid-cols-8 gap-2">
            {schedules[day].map((schedule: string, key: number) => (
              <Box className={`p-2 text-center rounded-md ${check(schedule, day) ? "bg-white/10 hover:bg-white/20 cursor-pointer text-white" : "bg-slate-500/10 text-white/50"}`} key={key} onClick={() => select(schedule, day)}>
                {schedule}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
} 