require('dotenv').config()
import {
  Text,
  Image,
  Stack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { GITHUB, INSTAGRAM, DISCORD, EMAIL, RESUME, CHESS } from '@/constants'

function SocialMedia() {
    const socialLinks = [
      {
        name: 'GitHub',
        href: GITHUB,
        icon: 'data:image/png;base64,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',
        isExternal: true,
      },
      {
        name: 'Instagram',
        href: INSTAGRAM, 
        icon: 'data:image/png;base64,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',
        isExternal: true,
      },
      {
        name: 'Discord',
        href: DISCORD,
        icon: 'data:image/png;base64,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',
        isExternal: true,
      },
    ]

    const moreLinks = [
        {
            name: 'Chess',
            href: CHESS,
            icon: 'data:image/png;base64,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',
            isExternal: true,
        },
        {
            name: 'Email',
            href: `mailto:${EMAIL}`,
            icon: 'data:image/png;base64,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',
            isExternal: true,
        },
        {
            name: 'Resume',
            href: `/${RESUME}`,
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbUlEQVR4nO2b/08SYRzH+amtf6Ct/7CNs5Jiiqm4lk3HnW6GyDS4BDzlEfSwmV+mJsvISZq50hJoWrOmy9rUNNjapz0PHCkScngqz/m8t/cvzx13vF98Ps/zHAODgYmJiYmJ6ZisVnRFMLqbeaP7q8CJQKk3eE5swlkMasVzYlMZBNDEOItqAAInbuAXry8tQurnJyq9tvgmWwmlAADsiw5xWis5NAEgNQeh1zZA1ZimAASKxxgAtRLy0MTllVti5T6maQWkKDQDwJ1jBcQjUZB5GR5X+ohDQggSs68vRwVE0BQ4ue68foWmir4OXspK3fHl9v+5AYhHoiRo5y0PLAyFYWd9mXghFCZj+Fi8yErAIagDIPMyCYkD//mROGI8ho/hdtBtC7hMXhJy9/PKMQB4DB9zmXz6BeDM9HpueMXKcd3OAU4NAVA5B4jmHhIQT3y54XfW0i0gmiX9tsBQa+jESRCfo1sAS+Mv/y2DofzL4OLIi5LngHylXRYA9rdiEPFPZkMWdEU3jHc+g1+bMdVzQFkC2N+KgWwbzIaz8RJY/QiEph6w3/VA+x0PtDz0gbUXga1VIufgc1FjEPa+rdLdAsntBNnY4EAOsxdqRgJgmhssaMtYABxV6f3CcNtTugG8HUv3fIfZC1XPgyeGV2yeDkJHtY+8diU8SyeAX5ux7LJX34+KDq+4Vu4n7SA1IFJJ1AFYnZkj4R81+FSHV9zWKJFr4GtRB2DCNUre/ANXX8kA7nsQucaoc5g+ANFQGLosEtSHZbg3P3TE5qhc3FwwMwBd9ZKq7wnKBkCKMjMAHKsA0LQFpFM8r6t5nC10HzVbY80roPcUz+tqABS6z4UCSFFmBoCjaA4QNCh5qucAgQYAKcqsOwAH3xMw7Z8AZ3VP8VVkdCd1A2AaTapvI6P4XjcAnBYJhIonIM1vQ+AL/NcolgR7LdrDGXjOXaMbAAInQqvJd0L439BuDexkyn9BqERXLw0AFE+CoyEbfqXltve66vC0AsBlf+iTLz08jQA0DU8bABzeoWV4mgCgjwfgqOvf1TQ8LQBweHtdeqnTNDwNAPwfzjD84Z/L45+clxuAlpvdYLf07Wc2Oe9sNzzXDFqLp+APEzwnzp9JeCz8N5MMBFIJZWOjO8lz7mW8vS1ph8fExMTExGRQ9BdPFQBJaS4TSQAAAABJRU5ErkJggg==',
            isExternal: true,
        },
    ]

    return (
      <Stack spacing={4} align="center" p={10} mt={'10px'}>
        <Image src="/favicon.ico" alt="Favicon" boxSize="70px" />
        <Stack direction="row" spacing={6}>
          {socialLinks.map((social) => (
            <Link href={social.href} passHref key={social.name}>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  boxSize="40px"
                />
                <Text>{social.name}</Text>
              </Stack>
            </Link>
          ))}
        </Stack>
        <Stack direction="row" spacing={6}>
          {moreLinks.map((social) => (
            <Link href={social.href} passHref key={social.name}>
              <Stack direction="row" align="center" spacing={2}>
                <Image
                  src={social.icon}
                  alt={`${social.name} icon`}
                  boxSize="40px"
                />
                <Text>{social.name}</Text>
              </Stack>
            </Link>
          ))}
        </Stack>
      </Stack>
    )
  }

export default SocialMedia