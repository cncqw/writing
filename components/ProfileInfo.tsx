import { siteMetadata } from '~/data/siteMetadata'
import Github from '~/icons/github.svg'
import Mail from '~/icons/mail.svg'
import Medium from '~/icons/medium.svg'
import Twitter from '~/icons/twitter.svg'

const socialMediums = [
  {
    name: 'twitter',
    url: siteMetadata.twitter,
    Svgr: Twitter,
  },
  {
    name: 'github',
    url: siteMetadata.github,
    Svgr: Github,
  },
  {
    name: 'medium',
    url: siteMetadata.medium,
    Svgr: Medium,
  },
  {
    name: 'email',
    url: `mailto:${siteMetadata.email}`,
    Svgr: Mail,
  },
]

export const ProfileCardInfo = () => {
  return (
    <div className="hidden py-6 md:block md:px-3">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        Max
      </h3>
      <div className="mt-4 mb-2 grid grid-cols-2 gap-4">
        {socialMediums.map(({ name, url, Svgr }) => (
          <a
            target="_blank"
            href={url}
            rel="noreferrer"
            className="hover:underline flex items-center"
            key={name}
          >
            <div className="mr-1 mt-1">
              <Svgr width="14" height="14" className="dark:bg-dark" />
            </div>
            {name}
          </a>
        ))}
      </div>
    </div>
  )
}
