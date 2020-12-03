import Vue from "vue";
import moment from "moment";

Vue.filter("date", (date: Date, format = "ll") => {
  if (!date) return "";
  return moment(date).format(format);
});

Vue.filter("fromNow", (date: Date) => {
  if (!date) return "";
  return moment(date).fromNow();
});
