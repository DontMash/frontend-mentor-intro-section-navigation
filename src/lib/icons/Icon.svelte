<script lang="ts">
  import IconArrowDown from './IconArrowDown.svelte';
  import IconArrowUp from './IconArrowUp.svelte';
  import IconCalendar from './IconCalendar.svelte';
  import IconCloseMenu from './IconCloseMenu.svelte';
  import IconMenu from './IconMenu.svelte';
  import IconPlanning from './IconPlanning.svelte';
  import IconReminders from './IconReminders.svelte';
  import IconTodo from './IconTodo.svelte';

  export let name: string;

  const icons: Record<string, ConstructorOfATypedSvelteComponent> = {
    'arrow-down': IconArrowDown,
    'arrow-up': IconArrowUp,
    'calendar': IconCalendar,
    'close-menu': IconCloseMenu,
    'menu': IconMenu,
    'planning': IconPlanning,
    'reminders': IconReminders,
    'todo': IconTodo,
  };
</script>

<span class="w-min mx-auto">
  <svelte:component this={icons[name]} />
</span>
