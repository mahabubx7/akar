---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/mahabubx7.png',
    name: 'Mahabub',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/mahabubx7' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/mahabubx7' }
    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
