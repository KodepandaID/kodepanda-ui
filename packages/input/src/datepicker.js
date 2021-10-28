import React, { useEffect, useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import "@zenbu-ui/utils/tailwind.css";
import "@zenbu-ui/utils/form.css";

import { Divider } from "@zenbu-ui/divider";
import { Icon } from "@zenbu-ui/icon";

import { GenerateMonth, GenerateYear, GenerateDay, GenerateDate } from "./datepicker/calendar";
import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import { 
  BorderSize, BorderSizeNum, BorderPosition, RingSize,
  Color, Palletes, Contrast,
  FontSize, FontWeight,
  RoundedSize, RoundedPosition,
  ShadowSize
} from "@zenbu-ui/utils";

const Datepicker = ({ className, id, name, label, width, rounded, roundedPosition, roundedCalendar, fluid, range, time, lang, format,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textSize, textColor, textColorContrast,
  dateHoverColor, dateHoverColorContrast, dateActiveColor, dateActiveColorContrast,
  dateTextColor, dateTextColorContrast, calendarColor, calendarColorContrast,
  dateHoverTextColor, dateHoverTextColorContrast, calendarActionButtonHoverColor, calendarActionButtonHoverColorContrast,
  calendarActionButtonTextColor, calendarActionButtonTextColorContrast,
  labelColor, labelColorContrast, labelSize, labelPosition,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast, 
  borderPosition,
  borderCalendar, borderCalendarSize, borderCalendarColor, borderCalendarColorContrast, 
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, defaultEndValue, disabled, onChange, shadow, shadowCalendar,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const node = useRef();

  const [mounted, setMounted] = useState(false);
  const [focusActive, setFocusActive] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCalendarDate, setOpenCalendarDate] = useState(true);
  const [openCalendarMonth, setOpenCalendarMonth] = useState(false);
  const [openCalendarYear, setOpenCalendarYear] = useState(false);
  const [value, setValue] = useState("");
  const [valueEnd, setValueEnd] = useState("");
  const [valueUnix, setValueUnix] = useState(defaultValue);
  const [valueUnixEnd, setValueUnixEnd] = useState(defaultEndValue);

  const [listMonth, setListMonth] = useState([]);
  const [listYear, setListYear] = useState([]);

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  const [monthEnd, setMonthEnd] = useState(0);
  const [yearEnd, setYearEnd] = useState(0);
  const [hourEnd, setHourEnd] = useState("00");
  const [minuteEnd, setMinuteEnd] = useState("00");
  const [secondEnd, setSecondEnd] = useState("00");

  const [yearNow, setYearNow] = useState(0);
  const [yearEndNow, setYearEndNow] = useState(0);

  const [days, setDays] = useState([]);
  const [dates, setDates] = useState([]);
  const [datesEnd, setDatesEnd] = useState([]);

  const wrapperClasses = cx(
    className !== undefined && className,
    fluid && `w-full`,
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined && width !== undefined && !fluid) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const wrapperInputClasses = cx(
    Color("bg", color, colorContrast),
    "relative",
    "flex",
    "flex-col",
    disabled && "opacity-25 cursor-not-allowed",
    !disabled && "cursor-pointer",
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    (border && borderSize !== "none" && borderPosition === undefined) && `border-${borderStyle} ${BorderSize[borderSize]}`,
    (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
    borderPosition !== undefined && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]}`,
    (focusActive && borderPosition === undefined) && `outline-none border-transparent ${RingSize[focusBorderSize]} ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
    shadow !== "none" && ShadowSize[shadow],
    Padding(px, py, pb, pl, pr, pt)
  )

  const baseClasses = cx(
    "w-full",
    "bg-transparent",
    Color("text", textColor, textColorContrast),
    FontSize[textSize],
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
    shadow !== "none" && ShadowSize[shadow],
    range && "text-center",
    "outline-none",
    "pl-3",
  )

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  const calendarClasses = cx(
    "relative",
    "w-max",
    Color("bg", calendarColor, calendarColorContrast),
    roundedCalendar !== "none" && RoundedSize[roundedCalendar],
    (borderCalendar && borderCalendarSize !== "none") && `border-${borderStyle} ${BorderSize[borderCalendarSize]}`,
    (borderCalendar && borderSize !== "none") && Color("border", borderCalendarColor, borderCalendarColorContrast),
    ShadowSize[shadowCalendar],
    "text-sm",
    "mt-1",
    "px-3",
    "py-2"
  )

  const monthClasses = cx(
    "bg-transparent",
    Color("text", calendarActionButtonTextColor, calendarActionButtonTextColorContrast),
    `hover:${Color("bg", calendarActionButtonHoverColor, calendarActionButtonHoverColorContrast)}`,
    "text-lg font-semibold",
    "rounded-md",
    "cursor-pointer",
    "px-1 py-0.5",
  )

  const yearClasses = cx(
    "bg-transparent",
    Color("text", calendarActionButtonTextColor, calendarActionButtonTextColorContrast),
    `hover:${Color("bg", calendarActionButtonHoverColor, calendarActionButtonHoverColorContrast)}`,
    "text-lg font-normal",
    "rounded-md",
    "cursor-pointer",
    "px-1 py-0.5",
  )

  const chevronClasses = cx(
    "bg-transparent",
    `hover:${Color("bg", calendarActionButtonHoverColor, calendarActionButtonHoverColorContrast)}`,
    "w-7",
    "h-7",
    "flex flex-wrap items-center content-center",
    "rounded-full",
    "cursor-pointer",
    "px-1",
    "py-1",
  )

  const textMonth = cx(
    Color("text", calendarActionButtonTextColor, calendarActionButtonTextColorContrast),
    "text-lg font-semibold",
  )

  const textMonthYear = cx(
    "flex flex-wrap items-center",
    range ? "justify-center" : "justify-start"
  )

  const listMonthClasses = cx(
    `hover:${Color("bg", dateHoverColor, dateHoverColorContrast)}`,
    `hover:${Color("text", dateHoverTextColor, dateHoverTextColorContrast)}`,
    "transition ease-in-out duration-100",
    "text-sm",
    "rounded-md",
    "cursor-pointer",
    "px-3 py-1",
  )

  const timeWrapperClasses = cx(
    "flex",
    "flex-wrap",
    "items-center",
    "justify-center",
    "mt-2",
    range && "w-1/2"
  )

  const timeClasses = cx(
    "w-6",
    "text-center",
    Color("bg", calendarActionButtonHoverColor, calendarActionButtonHoverColorContrast),
    Color("text", calendarActionButtonTextColor, calendarActionButtonTextColorContrast),
    "rounded-md",
  )

  const updateUnixTime = (t, unix, h, m, s) => {
    if (t === "start") {
      const vn = moment.unix(unix)
      .hour((h !== null && h !== undefined) ? h : parseInt(hour))
      .minute((m !== null && m !== undefined) ? m : parseInt(minute))
      .second((s !== null && s !== undefined) ? s : parseInt(second));
      const vnf = vn.locale(lang).format(format)
      setValueUnix(vn.unix())
      setValue(vnf)
    } else if (t === "end") {
      const ven = moment.unix(unix)
      .hour((h !== null && h !== undefined) ? h : parseInt(hourEnd))
      .minute((m !== null && m !== undefined) ? m : parseInt(minuteEnd))
      .second((s !== null && s !== undefined) ? s : parseInt(secondEnd));
      const venf = ven.locale(lang).format(format);
      setValueUnixEnd(ven.unix())
      setValueEnd(venf)
      if (onChange !== undefined) onChange([valueUnix, ven.unix()], [value, venf])
    }
  }

  const changeMonth = (m) => {
    let y = year;

    if (m < 1) {
      m = 11;
      y -= 1;
    }
    if (m > 11) {
      m = 0;
      y += 1;
    }

    setMonth(m)
    setYear(y)
    setDates(GenerateDate(m, y))

    if (range) {
      let nm = m + 1;
      let ny = y;
      if (y < year && m === 11) {
        ny = year;
      }
      if (m === 11 && nm === 12 && y === year) {
        nm = 0;
        ny += 1;
      }

      setMonthEnd(nm)
      setYearEnd(ny)
      setYearEndNow(ny)
      setDatesEnd(GenerateDate(nm, ny))
    }
  }

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpenCalendar(false);
  }

  const selectDate = (d, m, y) => {
    const t = moment().locale(lang).date(d).month(m).year(y).hour(0).minute(0).second(0);

    if (range) {
      if (valueUnix === 0) {
        setValueUnix(t.unix())
      } else if (valueUnix > 0 && valueUnixEnd === 0 && valueUnix < t.unix()) {
        updateUnixTime("end", t.unix())
        updateUnixTime("start", valueUnix)

        setOpenCalendar(false)
      } else if (valueUnix > 0 && valueUnixEnd > 0 && valueUnix < t.unix()) {
        updateUnixTime("end", valueUnix)
        updateUnixTime("start", t.unix())
      } else if (valueUnix >= t.unix()) {
        updateUnixTime("start", t.unix())
        setValueUnixEnd(0)
        setValueEnd("")
      }
    } else {
      setValue(t.format(format))

      if (onChange !== undefined) onChange(t.unix(), t.format(format))
      setOpenCalendar(false)
    }
  }

  useEffect(() => {
    if (!mounted) {
      const cd = new Date();
      setMonth(cd.getMonth())
      setYear(cd.getFullYear())

      setYearNow(cd.getFullYear())

      setDays(GenerateDay(lang))
      setDates(GenerateDate(cd.getMonth(), cd.getFullYear()))

      if (defaultValue > 0) setValue(moment.unix(defaultValue).locale(lang).format(format))
      if (time) {
        const m = moment.unix(defaultValue);
        setHour(m.hour())
        setMinute(m.minute())
        setSecond(m.second())
      }

      if (range) {
        let nm = cd.getMonth() + 1;
        let y = cd.getFullYear();
        if (nm > 12) {
          nm = 1;
          y += 1;
        }
        setMonthEnd(nm)
        setYearEnd(y)
        setYearEndNow(y)
        setDatesEnd(GenerateDate(nm, y))

        if (defaultEndValue > 0) setValueEnd(moment.unix(defaultEndValue).locale(lang).format(format))
        if (time) {
          const m = moment.unix(defaultEndValue);
          setHourEnd(m.hour())
          setMinuteEnd(m.minute())
          setSecondEnd(m.second())
        }
      }

      setMounted(true)
    }

    if (openCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openCalendar])

  return(
    <div ref={node} className="w-max">
      <div className={wrapperClasses}>
        {(label !== undefined && labelPosition === "outside") && (<label className={formLabelClasses}>{label}</label>)}
        <span className={wrapperInputClasses}>
          {(label !== undefined && labelPosition === "inside") && (<label className={formLabelClasses}>{label}</label>)}
          <div className="flex flex-row items-center justify-center space-x-2">
            <Icon className="absolute left-2" icon="calendar" size={textSize} color={textColor} colorContrast={textColorContrast} />
            <input
              id={id}
              type="text"
              name={name}
              placeholder={!range ? placeholder : "Start date" }
              className={baseClasses}
              value={value}
              onFocus={() => {
                if (focus) setFocusActive(true)
              }}
              onBlur={() => {
                if (focus) setFocusActive(false)
              }}
              onClick={() => setOpenCalendar(!openCalendar)}
              readOnly={true}
            />
            {range && (<Icon icon="chevron-double-right" color={textColor} colorContrast={textColorContrast} size={textSize} />)}
            {range && (
              <input
                id={id}
                type="text"
                name={name}
                placeholder={!range ? placeholder : "End date" }
                className={baseClasses}
                value={valueEnd}
                onFocus={() => {
                  if (focus) setFocusActive(true)
                }}
                onBlur={() => {
                  if (focus) setFocusActive(false)
                }}
                onClick={() => setOpenCalendar(!openCalendar)}
                readOnly={true}
              />
            )}
          </div>
        </span>
      </div>
      {mounted && (
        <Transition
        show={openCalendar}
        appear={openCalendar}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
          <div className={calendarClasses}>
            {openCalendarDate && (
              <>
                <div className="flex flex-row justify-start space-x-5">
                  <div className="w-max relative">
                    <div className={textMonthYear}>
                      {range && (
                        <div className="absolute left-0">
                          <span className={chevronClasses} onClick={() => changeMonth(month-1)}>
                            <Icon icon="chevron-left-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                          </span>
                        </div>
                      )}
                      <span className={monthClasses}
                      onClick={() => {
                        setListMonth(GenerateMonth(lang))
                        setOpenCalendarDate(false)
                        setOpenCalendarMonth(true)
                      }}>
                        {moment().locale(lang).month(month).format("MMMM")}
                      </span>
                      <span className={yearClasses}
                      onClick={() => {
                        setListYear(GenerateYear(yearNow))
                        setOpenCalendarDate(false)
                        setOpenCalendarYear(true)
                      }}
                      >{year}</span>
                      {!range && (
                        <span className="absolute right-2 flex flex-wrap items-center space-x-2">
                          <span className={chevronClasses} onClick={() => changeMonth(month-1)}>
                            <Icon icon="chevron-left-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                          </span>
                          <span className={chevronClasses} onClick={() => changeMonth(month+1)}>
                            <Icon icon="chevron-right-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                          </span>
                        </span>
                      )}
                    </div>

                    <table className="border-none mt-4">
                      {days.length > 0 && (
                        <thead>
                          <tr>
                            {days.map((d, i) => {
                              return(<th key={i} className="text-xs font-medium text-center text-gray-800 px-2">{d}</th>)
                            })}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                      {dates.length > 0 && (
                        Array.from(Array(Math.floor(dates.length / 7)), (e, i) => {
                          return(
                            <tr key={i}>
                              {Array.from(Array(7), (e, j) => {
                                const d = dates[j + (7 * i)].date;
                                const m = dates[j + (7 * i)].month;
                                const y = dates[j + (7 * i)].year;
                                const unix = dates[j + (7 * i)].unix;
                                const vn = moment.unix(valueUnix).startOf("day").unix();
                                const ven = moment.unix(valueUnixEnd).startOf("day").unix();

                                const tdClasses = cx(
                                  "text-xs text-center",
                                  (unix === vn && d !== 0 || unix === ven && d !== 0) && Color("bg", dateActiveColor, dateActiveColorContrast),
                                  !range && "rounded-md",
                                  (range && value !== "" && unix > vn && unix < ven && d !== 0) && Color("bg", dateActiveColor, 200),
                                  d > 0 && `hover:${Color("bg", dateHoverColor, dateHoverColorContrast)}`,
                                  d > 0 && `hover:${Color("text", dateHoverTextColor, dateHoverTextColorContrast)}`,
                                  d > 0 && "cursor-pointer",
                                  d > 0 && Color("text", dateTextColor, dateTextColorContrast),
                                  "transition ease-in-out duration-100",
                                  "py-2",
                                  "px-2"
                                )
                                return(
                                  <td key={j} className={tdClasses} onClick={() => {
                                    if (d>0) selectDate(d, m, y)
                                  }}>{d > 0 && d}</td>
                                )
                              })}
                            </tr>
                          )
                        })
                      )}
                      </tbody>
                    </table>
                  </div>
                  {range && (
                    <div className="w-max relative">
                      <div className={textMonthYear}>
                        <span className={monthClasses}
                        onClick={() => {
                          setListMonth(GenerateMonth(lang))
                          setOpenCalendarDate(false)
                          setOpenCalendarMonth(true)
                        }}>
                          {moment().locale(lang).month(monthEnd).format("MMMM")}
                        </span>
                        <span className={yearClasses}
                        onClick={() => {
                          setListYear(GenerateYear(yearEndNow))
                          setOpenCalendarDate(false)
                          setOpenCalendarYear(true)
                        }}
                        >{yearEnd}</span>
                        {range && (
                          <div className="absolute right-0">
                            <span className={chevronClasses} onClick={() => changeMonth(month+1)}>
                              <Icon icon="chevron-right-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                            </span>
                          </div>
                        )}
                      </div>
                      <table className="border-none mt-4">
                        {days.length > 0 && (
                          <thead>
                            <tr>
                              {days.map((d, i) => {
                                return(<th key={i} className="text-xs font-medium text-center text-gray-800 px-2">{d}</th>)
                              })}
                            </tr>
                          </thead>
                        )}
                        <tbody>
                        {datesEnd.length > 0 && (
                          Array.from(Array(Math.floor(datesEnd.length / 7)), (e, i) => {
                            return(
                              <tr key={i}>
                                {Array.from(Array(7), (e, j) => {
                                  const d = datesEnd[j + (7 * i)].date;
                                  const m = datesEnd[j + (7 * i)].month;
                                  const y = datesEnd[j + (7 * i)].year;
                                  const unix = datesEnd[j + (7 * i)].unix;
                                  const vn = moment.unix(valueUnix).startOf("day").unix();
                                const ven = moment.unix(valueUnixEnd).startOf("day").unix();

                                  const tdClasses = cx(
                                    "text-xs text-center",
                                    (unix === vn && d !== 0 || unix === ven && d !== 0) && Color("bg", dateActiveColor, dateActiveColorContrast),
                                    !range && "rounded-md",
                                    (range && value !== "" && unix > vn && unix < ven && d !== 0) && Color("bg", dateActiveColor, 200),
                                    d > 0 && `hover:${Color("bg", dateHoverColor, dateHoverColorContrast)}`,
                                    d > 0 && `hover:${Color("text", dateHoverTextColor, dateHoverTextColorContrast)}`,
                                    d > 0 && "cursor-pointer",
                                    d > 0 && Color("text", dateTextColor, dateTextColorContrast),
                                    "transition ease-in-out duration-100",
                                    "py-2",
                                    "px-2"
                                  )
                                  return(
                                    <td key={j} className={tdClasses} onClick={() => {
                                      if (d>0) selectDate(d, m, y)
                                    }}>{d > 0 && d}</td>
                                  )
                                })}
                              </tr>
                            )
                          })
                        )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                
                {time && (
                  <>
                    <Divider />
                    <div className={range ? "flex flex-row w-full" : null}>
                      <div className={timeWrapperClasses}>
                        <div className="w-max flex flex-row">
                          <input
                          className={timeClasses}
                          value={hour > 10 ? hour : ("0" + hour).slice(-2)}
                          onKeyUp={(e) => {
                            if (e.keyCode === 38) {
                              const h = parseInt(hour) + 1;
                              updateUnixTime("start", valueUnix, h)
                              setHour(h < 24 ? h : 23)
                            }

                            if (e.keyCode === 40) {
                              const h = hour - 1;
                              updateUnixTime("start", valueUnix, h)
                              setHour(h === 0 ? 0 : h)
                            }
                          }}
                          onChange={(e) => {
                            let num = e.target.value;
                            if (num > 23) num = 23;
                            updateUnixTime("start", valueUnix, parseInt(num))
                            setHour(parseInt(num))
                          }}
                          />
                          <div className="font-bold text-sm px-3">:</div>
                          <input 
                          className={timeClasses}
                          value={minute > 10 ? minute : ("0" + minute).slice(-2)}
                          onKeyUp={(e) => {
                            if (e.keyCode === 38) {
                              const m = parseInt(minute) + 1;
                              updateUnixTime("start", valueUnix, null, m)
                              setMinute(m < 60 ? m : 59)
                            }

                            if (e.keyCode === 40) {
                              const m = minute - 1;
                              updateUnixTime("start", valueUnix, null, m)
                              setMinute(m === 0 ? 0 : m)
                            }
                          }}
                          onChange={(e) => {
                            let num = e.target.value;
                            if (num > 59) num = 59;
                            updateUnixTime("start", valueUnix, null, parseInt(num))
                            setMinute(parseInt(num))
                          }}
                          />
                          <div className="font-bold text-sm px-3">:</div>
                          <input
                          className={timeClasses} 
                          value={second > 10 ? second : ("0" + second).slice(-2)}
                          onKeyUp={(e) => {
                            if (e.keyCode === 38) {
                              const s = parseInt(second) + 1;
                              updateUnixTime("start", valueUnix, null, null, s)
                              setSecond(s < 60 ? s : 59)
                            }

                            if (e.keyCode === 40) {
                              const s = second - 1;
                              updateUnixTime("start", valueUnix, null, null, s)
                              setSecond(s === 0 ? 0 : s)
                            }
                          }}
                          onChange={(e) => {
                            let num = e.target.value;
                            if (num > 59) num = 59;
                            updateUnixTime("start", valueUnix, null, null, parseInt(num))
                            setSecond(parseInt(num))
                          }}
                          />
                        </div>
                        <span className="font-bold px-3">{hour < 12 ? "AM" : "PM"}</span>
                      </div>
                      {range && (
                        <div className={timeWrapperClasses}>
                          <div className="w-max flex flex-row">
                            <input
                            className={timeClasses}
                            value={hourEnd > 10 ? hourEnd : ("0" + hourEnd).slice(-2)}
                            onKeyUp={(e) => {
                              if (e.keyCode === 38) {
                                const h = parseInt(hourEnd) + 1;
                                updateUnixTime("end", valueUnixEnd, h)
                                setHourEnd(h < 24 ? h : 23)
                              }

                              if (e.keyCode === 40) {
                                const h = hourEnd - 1;
                                updateUnixTime("end", valueUnixEnd, h)
                                setHourEnd(h === 0 ? 0 : h)
                              }
                            }}
                            onChange={(e) => {
                              let num = e.target.value;
                              if (num > 23) num = 23;
                              updateUnixTime("end", valueUnixEnd, parseInt(num))
                              setHourEnd(parseInt(num))
                            }}
                            />
                            <div className="font-bold text-sm px-3">:</div>
                            <input 
                            className={timeClasses}
                            value={minuteEnd > 10 ? minuteEnd : ("0" + minuteEnd).slice(-2)}
                            onKeyUp={(e) => {
                              if (e.keyCode === 38) {
                                const m = parseInt(minuteEnd) + 1;
                                updateUnixTime("end", valueUnixEnd, null, m)
                                setMinuteEnd(m < 60 ? m : 59)
                              }

                              if (e.keyCode === 40) {
                                const m = minuteEnd - 1;
                                updateUnixTime("end", valueUnixEnd, null, m)
                                setMinuteEnd(m === 0 ? 0 : m)
                              }
                            }}
                            onChange={(e) => {
                              let num = e.target.value;
                              if (num > 59) num = 59;
                              updateUnixTime("end", valueUnixEnd, null, parseInt(num))
                              setMinuteEnd(parseInt(num))
                            }}
                            />
                            <div className="font-bold text-sm px-3">:</div>
                            <input
                            className={timeClasses} 
                            value={secondEnd > 10 ? secondEnd : ("0" + secondEnd).slice(-2)}
                            onKeyUp={(e) => {
                              if (e.keyCode === 38) {
                                const s = parseInt(secondEnd) + 1;
                                updateUnixTime("end", valueUnixEnd, null, null, s)
                                setSecondEnd(s < 60 ? s : 59)
                              }

                              if (e.keyCode === 40) {
                                const s = secondEnd - 1;
                                updateUnixTime("end", valueUnixEnd, null, null, s)
                                setSecondEnd(s === 0 ? 0 : s)
                              }
                            }}
                            onChange={(e) => {
                              let num = e.target.value;
                              if (num > 59) num = 59;
                              updateUnixTime("end", valueUnixEnd, null, null, parseInt(num))
                              setSecondEnd(parseInt(num))
                            }}
                            />
                          </div>
                          <span className="font-bold px-3">{hourEnd < 12 ? "AM" : "PM"}</span>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </>
            )}

            {openCalendarMonth && (
              <>
                <div className="flex flex-row items-center justify-center">
                  <span className="absolute left-2">
                    <span className={chevronClasses} onClick={() => setYear(year-1)}>
                      <Icon icon="chevron-left-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                    </span>
                  </span>
                  
                  <span className={textMonth}>{year}</span>
                  <span className="absolute right-2">
                    <span className={chevronClasses} onClick={() => setYear(year+1)}>
                      <Icon icon="chevron-right-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                    </span>
                  </span>
                </div>
                <Divider />

                <table className="border-none">
                  <tbody>
                    {Array.from(Array(4), (e, i) => {
                      return(
                        <tr key={i}>
                          {Array.from(Array(3), (e, j) => {
                            return(
                              <td key={j} className="pr-2 py-3" onClick={() => {
                                setMonth(j + (3 * i))
                                setDates(GenerateDate((j + (3 * i)), year))

                                setOpenCalendarMonth(false)
                                setOpenCalendarDate(true)
                              }}>
                                <span className={listMonthClasses}>{listMonth[j + (3 * i)]}</span>
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </>
            )}

            {openCalendarYear && (
              <>
              <div className="flex flex-row items-center justify-center">
                <span className="absolute left-2">
                  <span className={chevronClasses} onClick={() => setListYear(GenerateYear(listYear[0]))}>
                    <Icon icon="chevron-left-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                  </span>
                </span>
                <span className={textMonth}>{moment().locale(lang).month(month).format("MMMM")}</span>
                <span className="absolute right-2">
                  <span className={chevronClasses} onClick={() => setListYear(GenerateYear(listYear[listYear.length - 1] + 11))}>
                    <Icon icon="chevron-right-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                  </span>
                </span>
              </div>
              <Divider />

              <table className="border-none">
                <tbody>
                  {Array.from(Array(4), (e, i) => {
                    return(
                      <tr key={i}>
                        {Array.from(Array(3), (e, j) => {
                          return(
                            <td key={j} className="pr-2 py-3" onClick={() => {
                              setYear(listYear[j + (3 * i)])
                              setDates(GenerateDate(month, listYear[j + (3 * i)]))

                              setOpenCalendarYear(false)
                              setOpenCalendarDate(true)
                            }}>
                              <span className={listMonthClasses}>{listYear[j + (3 * i)]}</span>
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </>
            )}
          </div>
        </Transition>
      )}
    </div>
  )
}

Datepicker.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  range: PropTypes.bool,
  time: PropTypes.bool,
  format: PropTypes.string,
  fluid: PropTypes.bool,
  calendarColor: PropTypes.oneOf(Palletes),
  calendarColorContrast: PropTypes.oneOf(Contrast),
  calendarActionButtonTextColor: PropTypes.oneOf(Palletes),
  calendarActionButtonTextColorContrast: PropTypes.oneOf(Contrast),
  calendarActionButtonHoverColor: PropTypes.oneOf(Palletes),
  calendarActionButtonHoverColorContrast: PropTypes.oneOf(Contrast),
  dateTextColor: PropTypes.oneOf(Palletes),
  dateTextColorContrast: PropTypes.oneOf(Contrast),
  dateActiveColor: PropTypes.oneOf(Palletes),
  dateActiveColorContrast: PropTypes.oneOf(Contrast),
  dateHoverColor: PropTypes.oneOf(Palletes),
  dateHoverColorContrast: PropTypes.oneOf(Contrast),
  dateHoverTextColor: PropTypes.oneOf(Palletes),
  dateHoverTextColorContrast: PropTypes.oneOf(Contrast),
  borderCalendar: PropTypes.bool,
  borderCalendarSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderCalendarColor: PropTypes.oneOf(Palletes),
  borderCalendarColorContrast: PropTypes.oneOf(Contrast),
  shadowCalendar: PropTypes.oneOf(Object.keys(ShadowSize)),
  disabled: PropTypes.bool,
  defaultValue: PropTypes.number,
  defaultEndValue: PropTypes.number,
  lang: PropTypes.string,
  onChange: PropTypes.func,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Texts,
  ...Spacings
}

Datepicker.defaultProps = {
  defaultValue: 0,
  defaultEndValue: 0,
  lang: "en",
  range: false,
  time: false,
  format: "DD/MM/YYYY",
  placeholder: "Select Date",
  width: "max",
  color: "white",
  colorContrast: 200,
  calendarColor: "white",
  calendarColorContrast: 200,
  calendarActionButtonTextColor: "gray",
  calendarActionButtonTextColorContrast: 700,
  calendarActionButtonHoverColor: "gray",
  calendarActionButtonHoverColorContrast: 200,
  dateTextColor: "gray",
  dateTextColorContrast: 700,
  dateActiveColor: "gray",
  dateActiveColorContrast: 300,
  dateHoverColor: "blue",
  dateHoverColorContrast: 700,
  dateHoverTextColor: "white",
  dateHoverTextColorContrast: 700,
  labelColor: "gray",
  labelColorContrast: 600,
  labelPosition: "outside",
  labelSize: "sm",
  textSize: "sm",
  textColor: "gray",
  textColorContrast: 600,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderSize: "xs",
  borderStyle: "solid",
  borderCalendar: true,
  borderCalendarColor: "gray",
  borderCalendarColorContrast: 300,
  borderCalendarSize: "xs",
  focus: true,
  focusBorderColor: "blue",
  focusBorderColorContrast: 600,
  focusBorderSize: "xs",
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  rounded: "none",
  roundedCalendar: "none",
  shadow: "none",
  shadowCalendar: "none", 
  py: 1.5,
  px: 4,
}

export {
  Datepicker
}
