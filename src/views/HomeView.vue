<template>
  <q-page>
    <div class="row justify-center">
      <div class="column col-md-6 col-10 q-mt-md">
        <div class="row q-mb-md items-center q-gutter-lg">
          <div class="text-h3 left-brdr-anim">
            Profile
          </div>
          <div
            class="col-grow text-right text-italic text-grey-10 cursor-pointer"
          >
            <a
              href="https://vk.com/karanarqq"
              target="__blank"
            >
              <q-icon
                color="orange-10"
                name="fas fa-dove"
                size="xs"
              />
              by Artem Shuvaev
            </a>
          </div>
        </div>
        <div class="text-grey-10">
          <div class="text-h4 q-mb-md">
            <q-icon
              name="fas fa-at"
              size="sm"
              color="green-6"
            />
            About me
          </div>
          <div class="row text-body1">
            <div>
              Hello, world! My name is Artem Shuvaev, I am Middle+ frontend
              developer from Perm, Russia.
            </div>
            <div class="q-mt-sm">
              I am 20 years old, student in HSE Perm.
            </div>
            <div class="q-mt-sm">
              If you want to contact me, I prefer
              <a
                class="cursor-pointer text-primary"
                href="https://t.me/karanarqq"
                target="__blank"
              >Telegram</a>. But,
              please, check
              <strong>Job requirements</strong>
              if you want to offer a job.
            </div>
          </div>
          <q-separator
            color="grey-1"
            class="q-my-md"
          />
          <div class="text-h4 q-mb-md">
            <q-icon
              name="fab fa-buffer"
              size="sm"
              color="purple-10"
            />
            Skills
          </div>
          <div class="text-body1">
            I have full-pack core skills for Vue.js frontend up to Senior:
          </div>
          <q-chip
            v-for="item in skills"
            :key="item"
            class="text-body1"
            size="md"
            color="blue-1"
          >
            {{ item }}
          </q-chip>
          <div class="text-body1 q-mt-md">
            Also I have experience with backend, bots development, multiplatform
            desktop development:
          </div>
          <q-chip
            v-for="item in sideSkills"
            :key="item"
            class="text-body1"
            color="grey-2"
            size="md"
          >
            {{ item }}
          </q-chip>
        </div>
        <q-separator
          color="grey-1"
          class="q-my-md"
        />
        <div class="text-h4 q-mb-md">
          <q-icon
            name="fas fa-code-branch"
            size="sm"
            color="orange-8"
          />
          Projects
        </div>
        <div class="text-body1">
          Works for IT company located in Perm at fullstack wev dev position (<a
            href="https://www.get-net.ru"
            class="cursor-pointer text-primary"
            target="__blank"
          >Get-Net</a>). Have frilance projects for large companies with PyQt app. Now
          working in Russian start-up: business messenger
          <a
            href="https://tada.team"
            target="__blank"
            class="cursor-pointer text-primary"
          >tada.team</a>.
        </div>
        <q-separator
          color="grey-1"
          class="q-my-md"
        />
        <div class="text-h4 q-mb-md">
          <q-icon
            name="fas fa-search-dollar"
            size="sm"
            color="red"
          />
          Job requirements
        </div>
        <div class="text-body1">
          Now I am not looking for a job. Minimal salary - 2k$. I am also can
          relocate or work on remote.
        </div>
        <q-separator
          color="grey-1"
          class="q-my-md"
        />
        <div class="text-h4 q-mb-md">
          <q-icon
            name="fas fa-code"
            size="sm"
            color="indigo-7"
          />
          Code examples
        </div>
        <div class="text-body1">
          <q-card
            class="q-pa-md no-shadow rounded-borders bg-grey-3"
            bordered
          >
            <div
              v-for="example in examples"
              :key="example.label"
              class="row"
            >
              {{ tagCharOpen }}<span class="text-purple-6 q-mr-xs">a</span><span class="text-green-6">href</span>="<a
                class="text-primary cursor-pointer"
                href="https://github.com/sadfsdfdsa/habratest"
                target="__blank"
              >{{ example.link }}</a>"{{ tagCharClose }}{{ example.label }}{{ tagCharOpen }}/<span
                class="text-purple-6"
              >a</span>{{ tagCharClose }}
            </div>
          </q-card>
        </div>
        <q-separator
          color="grey-1"
          class="q-my-md"
        />
        <div class="text-h4 q-mb-md">
          <q-icon
            name="fas fa-link"
            size="sm"
            color="primary"
          />
          Links and socials
        </div>
        <div class="row text-body1 q-gutter-lg">
          <a
            v-for="link in links"
            :key="link.label"
            class="text-primary cursor-pointer"
            :href="link.link"
            target="__blank"
          >
            {{ link.label }}</a>
        </div>
        <!-- FOOTER -->
        <q-separator
          color="grey-1"
          class="q-my-md"
        />
        <div class="column q-my-md">
          <div class="row justify-center qtext-grey-10 text-h6">
            {{ designText }}
          </div>
          <div class="row justify-center q-mt-sm">
            <q-rating
              v-model="rating"
              size="2.5em"
              color="grey-10"
              :disable="inputRating"
              @input="inputRating = true"
            />
          </div>
        </div>
        <!-- END BODY -->
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'HomeView',
})
export default class HomeView extends Vue {
  rating = 4
  inputRating = false

  tagCharOpen = '<'
  tagCharClose = '>'

  readonly skills = [
    'Vue.js (2, 3)',
    'Vue-router',
    'Vuex',
    'Typescript',
    'Git',
    'Gitlab CI/CD',
    'Webpack',
    'Quasar',
    'Bootstrap',
    'HTML5',
    'JavaScript',
    'REST API',
    'CSS/SCSS',
  ]

  readonly sideSkills = [
    'Golang',
    'Python',
    'Flask',
    'Django',
    'Electron',
    'C#',
    'Flutter',
    'SQL',
    'PGSQL',
    'Lua',
    'Tarantool',
    'Nginx',
    'PyQt',
  ]

  readonly links = [
    { label: 'Telegram', link: 'https://t.me/karanarqq' },
    { label: 'Github', link: 'https://github.com/sadfsdfdsa' },
    { label: 'Habr', link:'https://habr.com/ru/users/karanarqq/' },
    { label: 'Career', link: 'https://career.habr.com/karanarqq' },
    { label: 'VK', link: 'https://vk.com/karanarqq' },
    { label: 'Email', link: 'mailto:vartose@yandex.com' },
    { label: 'Medium', link: 'https://karanarqq.medium.com' },
  ]

  readonly examples = [
    { label: 'My Habr article', link: 'https://github.com/sadfsdfdsa/habratest' },
    {
      label: 'Filtery test case',
      link: 'https://github.com/sadfsdfdsa/bell-integrator-filtery',
    },
    {
      label: 'Vue3 test case',
      link: 'https://github.com/sadfsdfdsa/it_club_test_case',
    },
  ]

  get designText() {
    return this.inputRating ? 'Thanks!' : 'Do you like this minimal design?'
  }
}
</script>

<style lang="scss" scoped>
.left-brdr-anim {
  animation-duration: 1s;
  animation-name: left-border-tick;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes left-border-tick {
  0% {
    border-left: 3px solid transparent;
  }

  50% {
    border-left: 3px solid black;
  }

  100% {
    border-left: 3px solid transparent;
  }
}
</style>
