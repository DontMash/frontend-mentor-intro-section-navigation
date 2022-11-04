<script lang="ts">
  import { children, space } from 'svelte/internal';
  import Footer from './lib/Footer.svelte';
  import Icon from './lib/icons/Icon.svelte';

  type PageDTO = {
    title: string;
    icon?: string;
    children?: PageDTO[];
  };

  const pages: PageDTO[] = [
    {
      title: 'Features',
      children: [
        {
          title: 'Todo List',
          icon: 'todo',
        },
        {
          title: 'Calendar',
          icon: 'calendar',
        },
        {
          title: 'Reminders',
          icon: 'reminders',
        },
        {
          title: 'Planning',
          icon: 'planning',
        },
      ],
    },
    {
      title: 'Company',
      children: [
        {
          title: 'History',
        },
        {
          title: 'Our Team',
        },
        {
          title: 'Blog',
        },
      ],
    },
    {
      title: 'Careers',
    },
    {
      title: 'About',
    },
  ];
  const hasSubPages = (page: PageDTO): boolean => {
    return page.children && page.children.length > 0;
  };
</script>

<header class="sticky top-0 left-0 bg-almost-white">
  <div
    class="flex justify-between md:items-center max-w-7xl px-6 md:px-12 pt-7 md:pt-4 pb-4 mx-auto md:mt-5"
  >
    <a href="/">
      <img src="/images/logo.svg" alt="snap Logo" width="84" height="27" />
    </a>
    <div
      id="menu"
      class="group fixed md:static inset-0 flex justify-end md:justify-start md:w-full md:text-sm opacity-0 md:opacity-100 target:opacity-100 transition-opacity pointer-events-none md:pointer-events-auto target:pointer-events-auto"
    >
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a class="-z-10 absolute inset-0 md:hidden bg-almost-black bg-opacity-50" href="#">
        <span class="sr-only">Close menu</span>
      </a>
      <nav
        class="flex flex-col md:flex-row justify-start md:justify-between md:items-center w-2/3 md:w-full max-w-md md:max-w-none h-full md:h-auto px-6 py-7 md:p-0 md:ml-16 bg-almost-white overflow-y-auto md:overflow-visible translate-x-full md:translate-x-0 group-target:translate-x-0 transition-transform space-y-6 md:space-y-0"
      >
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a class="self-end md:hidden" href="#">
          <Icon name="close-menu" />
          <span class="sr-only">Close menu</span>
        </a>
        <ul class="flex flex-col md:flex-row pt-4 md:pt-0 md:space-x-4 lg:space-x-8 space-y-6 md:space-y-0">
          {#each pages as page}
            <li class="md:pt-4 md:pb-3.5">
              <svelte:element
              class="group-one"
                this={hasSubPages(page) ? 'details' : 'a'}
                href={hasSubPages(page) ? '/' : null}
              >
                <summary
                  class="md:peer flex items-center cursor-pointer space-x-2 hover:text-almost-black"
                >
                  <span>{page.title}</span>
                  {#if hasSubPages(page)}
                    <div class="transition-transform group-one-open:-rotate-180">
                      <Icon name="arrow-down" />
                    </div>
                  {/if}
                  </summary>
                {#if hasSubPages(page)}
                  <ul
                    class="px-6 pt-6 pb-2 rounded-lg md:shadow-xl space-y-4"
                  >
                    {#each page.children as child}
                      <li>
                        <a
                          class="flex space-x-3 hover:text-almost-black transition-colors"
                          href="/"
                        >
                          {#if child.icon}
                            <div class="w-4 mt-[0.1em]">
                              <Icon name={child.icon} />
                            </div>
                          {/if}
                          <span>{child.title}</span>
                        </a>
                      </li>
                    {/each}
                  </ul>
                {/if}
              </svelte:element>
            </li>
          {/each}
        </ul>
        <div
          class="flex flex-col md:flex-row md:items-center text-sm md:space-x-4 space-y-2 md:space-y-0"
        >
          <a
            class="block px-5 pt-4 pb-3.5 text-center leading-none hover:text-almost-black transition-colors"
            href="/"
          >
            Login
          </a>
          <a
            class="block px-5 pt-4 pb-3.5 rounded-2xl border-2 border-medium-gray text-center leading-none hover:border-almost-black hover:bg-almost-black hover:text-almost-white transition-colors"
            href="/"
          >
            Register
          </a>
        </div>
      </nav>
    </div>
    <a class="md:hidden" href="#menu">
      <Icon name="menu" />
      <span class="sr-only">Menu</span>
    </a>
  </div>
</header>
<main class="min-h-screen md:px-12 py-2 md:py-8 space-y-6">
  <section class="max-w-5xl mx-auto">
    <h1 class="sr-only">Introduction</h1>
    <article class="flex flex-col md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-16">
      <picture class="md:order-last">
        <source srcset="/images/image-hero-desktop.png" media="(min-width: 768px)" />
        <source srcset="/images/image-hero-mobile.png" />
        <img
          src="/images/image-hero-mobile.png"
          alt="Remote work illustration"
          width="750"
          height="564"
        />
      </picture>
      <div
        class="flex flex-col md:justify-between items-center md:items-start px-6 md:px-0 pt-12 md:pt-20 lg:pt-24 text-center md:text-left space-y-6 md:space-y-0"
      >
        <h2
          class="text-[34px] md:text-5xl lg:text-7xl text-almost-black font-bold leading-none"
        >
          Make remote work
        </h2>
        <p class="lg:w-4/5">
          Get your team in sync, no matter your location. Streamline processes, create
          team rituals, and watch productivity soar.
        </p>
        <!-- dirty/uneven button padding since font is misaligned -->
        <a
          class="inline-block max-w-fit px-6 pt-4 pb-3.5 md:!mb-8 rounded-2xl border-2 border-almost-black bg-almost-black text-almost-white leading-none transition-colors hover:border-medium-gray hover:bg-almost-white hover:text-almost-black"
          href="/"
        >
          Learn more
        </a>
        <ul
          class="flex justify-center md:justify-start items-center py-4 md:py-0 space-x-8"
        >
          <li>
            <img
              src="/images/client-databiz.svg"
              alt="Client databiz"
              width="114"
              height="20"
            />
          </li>
          <li>
            <img
              src="/images/client-audiophile.svg"
              alt="Client audiophile"
              width="73"
              height="36"
            />
          </li>
          <li>
            <img src="/images/client-meet.svg" alt="Client meet" width="90" height="20" />
          </li>
          <li>
            <img
              src="/images/client-maker.svg"
              alt="Client maker"
              width="83"
              height="24"
            />
          </li>
        </ul>
      </div>
    </article>
  </section>
</main>
<Footer />
