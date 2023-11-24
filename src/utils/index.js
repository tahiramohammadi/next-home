import moment from "moment"

// 👉 IsEmpty
export const isEmpty = value => {
  if (value === null || value === undefined || value === '')
    return true

  return !!(Array.isArray(value) && value.length === 0)
}

// 👉 IsNullOrUndefined
export const isNullOrUndefined = value => {
  return value === null || value === undefined
}

// 👉 IsEmptyArray
export const isEmptyArray = arr => {
  return Array.isArray(arr) && arr.length === 0
}

export const formateDate = date => {
  const timestamp = moment(date)

  return timestamp.format('yyyy-MM-DD')
}


export const humanReadableTime = date => {
  const timestamp = moment(date)
  return timestamp.format('yyyy-MM-DD h:m:s')
}


// export const can = action => {
//   return true
//   const permissions = JSON.parse(localStorage.getItem('userAbilities') ?? [], true)
//   const route = useRoute();
//   let result = false
//   permissions.forEach(row => {
//     if (row.subject == route?.meta?.subject && row.action == action) {
//       result = true
//     }
//   })

//   return result
// }


// 👉 IsObject
export const isObject = obj => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)