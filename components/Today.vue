<template> </template>
<script>
export default {
  async asyncData({ $content, params }) {
    const current = new Date();
    const todayDay = current.getDate();
    const todayMonth = current.getMonth();

    const personToday = await $content("artists")
      .where({ day: todayDay, month: todayMonth })
      .fetch();

    console.log(personToday[0].slug);

    const persons = await $content("artists")
      .where({ day: todayDay, month: todayMonth })
      .fetch();

    const [prev, next] = await $content("artists")
      .only(["name", "slug"])
      .surround(personToday[0].slug)
      .fetch();

    return {
      prev,
      next,
      todayDay,
      todayMonth,
      personToday,
      persons
    };
  }
};
</script>
