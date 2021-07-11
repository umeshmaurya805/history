// import { compareAsc } from "date-fns";

// export const eventBinarySearch = (events, dateToCompare) => {
  // let low = 0,
  //   high = events.length - 1,
  //   res;

  // while (low <= high) {
  //   const mid = Math.floor(low + (high - low) / 2);

  //   const { slug, startDate } = events[mid];

  //   const cmp = compareAsc(dateToCompare, startDate);

  //   switch (cmp) {
  //     case 0:
  //       return slug;
  //     case -1:
  //       res = slug;
  //       high = mid - 1;
  //       break;

  //     case 1:
  //       low = mid + 1;
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // return res;
// };
// 