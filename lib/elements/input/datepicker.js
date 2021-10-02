import React, { useEffect, useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";

import Divider from "../divider/divider";
import Icon from "../icon/icon";

import { GenerateMonth, GenerateYear, GenerateDay, GenerateDate } from "../../utils/calendar/calendar";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderPosition, BorderType, BorderSizeNum, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { Width } from "../../utils/size";
import { FontSize, FontWeight } from "../../utils/font";

const Datepicker = ({ className, id, name, label, width, rounded, roundedPosition, roundedCalendar, fluid, range, time, lang, format,
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
  defaultValue, disabled, onChange, shadow, shadowCalendar, selectMonthText, selectYearText,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const node = useRef();

  const [mounted, setMounted] = useState(false);
  const [focusActive, setFocusActive] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openCalendarDate, setOpenCalendarDate] = useState(true);
  const [openCalendarMonth, setOpenCalendarMonth] = useState(false);
  const [openCalendarYear, setOpenCalendarYear] = useState(false);
  const [value, setValue] = useState("");

  const [listMonth, setListMonth] = useState([]);
  const [listYear, setListYear] = useState([]);

  const [date, setDate] = useState(1);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [dateNow, setDateNow] = useState(1);
  const [monthNow, setMonthNow] = useState(0);
  const [yearNow, setYearNow] = useState(0);

  const [days, setDays] = useState([]);
  const [dates, setDates] = useState([]);

  const wrapperClasses = cx(
    className !== undefined && className,
    !fluid ? `w-${width}` : "w-full",
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  const wrapperInputClasses = cx(
    "w-full",
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
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
    (pb !== undefined && pb >= 0) && `pb-${pb}`,
    (pb !== undefined && pb < 0) && `-pb${pb}`,
    (pl !== undefined && pl >= 0) && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0) && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
    (pt !== undefined && pt >= 0) && `pt-${pt}`,
    (pt !== undefined && pt < 0) && `-pt${pt}`
  )

  const baseClasses = cx(
    "w-full",
    "bg-transparent",
    Color("text", textColor, textColorContrast),
    FontSize[textSize],
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
    shadow !== "none" && ShadowSize[shadow],
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

  const listMonthClasses = cx(
    `hover:${Color("bg", dateHoverColor, dateHoverColorContrast)}`,
    `hover:${Color("text", dateHoverTextColor, dateHoverTextColorContrast)}`,
    "transition ease-in-out duration-100",
    "text-sm",
    "rounded-md",
    "cursor-pointer",
    "px-3 py-1",
  )

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

    setDate(0)
    setMonth(m)
    setYear(y)
    setDates(GenerateDate(m, y))
  }

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpenCalendar(false);
  }

  useEffect(() => {
    if (!mounted) {
      const cd = new Date();
      setDate(cd.getDate())
      setMonth(cd.getMonth())
      setYear(cd.getFullYear())

      setDateNow(cd.getDate())
      setMonthNow(cd.getMonth())
      setYearNow(cd.getFullYear())

      setDays(GenerateDay(lang))
      setDates(GenerateDate(cd.getMonth(), cd.getFullYear()))

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
          <div className="flex flex-wrap items-center justify-center space-x-2">
            <Icon className="absolute left-2" icon="calendar" size={textSize} color={textColor} colorContrast={textColorContrast} />
            <input
              id={id}
              type="text"
              name={name}
              placeholder={placeholder}
              className={baseClasses}
              value={value}
              onChange={(e) => {}}
              onClick={() => setOpenCalendar(!openCalendar)}
              readOnly={true}
            />
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
                <div className="flex flex-wrap items-center justify-start">
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
                  <span className="absolute right-2 flex flex-wrap items-center space-x-2">
                    <span className={chevronClasses} onClick={() => changeMonth(month-1)}>
                      <Icon icon="chevron-left-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                    </span>
                    <span className={chevronClasses} onClick={() => changeMonth(month+1)}>
                      <Icon icon="chevron-right-solid" color={calendarActionButtonTextColor} colorContrast={calendarActionButtonTextColorContrast} height={6} />
                    </span>
                  </span>
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
                            const tdClasses = cx(
                              "rounded-md",
                              "text-xs text-center",
                              (dateNow === dates[j + (7 * i)].date && monthNow === dates[j + (7 * i)].month && yearNow === dates[j + (7 * i)].year) && `${Color("bg", dateActiveColor, dateActiveColorContrast)}`,
                              `hover:${Color("bg", dateHoverColor, dateHoverColorContrast)}`,
                              `hover:${Color("text", dateHoverTextColor, dateHoverTextColorContrast)}`,
                              "cursor-pointer",
                              dates[j + (7 * i)].month != month ? Color("text", dateTextColor, 300) : Color("text", dateTextColorContrast),
                              "transition ease-in-out duration-100",
                              "py-2",
                              "px-2"
                            )
                            return(
                              <td key={j} className={tdClasses} onClick={() => {
                                const d = dates[j + (7 * i)].date;
                                const m = moment().locale(lang).date(d).month(month).year(year)
                                setValue(m.format(format))

                                if (onChange !== undefined) onChange(m.unix(), m.format(format))

                                setOpenCalendar(false)
                              }}>{dates[j + (7 * i)].date}</td>
                            )
                          })}
                        </tr>
                      )
                    })
                  )}
                  </tbody>
                </table>
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
  width: PropTypes.oneOf(Width),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  roundedCalendar: PropTypes.oneOf(Object.keys(RoundedSize)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
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
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  labelPosition: PropTypes.oneOf(["inside", "outside"]),
  border: PropTypes.bool,
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderPosition: PropTypes.oneOf(Object.keys(BorderPosition)),
  borderCalendar: PropTypes.bool,
  borderCalendarSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderCalendarColor: PropTypes.oneOf(Palletes),
  borderCalendarColorContrast: PropTypes.oneOf(Contrast),
  focus: PropTypes.bool,
  focusBorderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  shadowCalendar: PropTypes.oneOf(Object.keys(ShadowSize)),
  disabled: PropTypes.bool,
  defaultValue: PropTypes.number,
  lang: PropTypes.string,
  selectMonthText: PropTypes.string,
  selectYearText: PropTypes.string,
  onChange: PropTypes.func,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

Datepicker.defaultProps = {
  defaultValue: 0,
  lang: "en",
  range: false,
  time: false,
  format: "DD/MM/YYYY",
  placeholder: "Select Date",
  width: 52,
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
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  rounded: "none",
  roundedCalendar: "none",
  shadow: "none",
  shadowCalendar: "none", 
  selectMonthText: "Select month",
  selectYearText: "Select year",
  py: 1.5,
  px: 4,
}

export default Datepicker;