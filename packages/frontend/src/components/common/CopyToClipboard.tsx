import { LinkIcon } from './Icon'
import copy from 'copy-to-clipboard'

interface Props {
  textToCopy: string
}

export function CopyToClipboard({ textToCopy }: Props) {
  return (
    <button className="text-indigo-700 hover:text-indigo-950" onClick={() => copy(textToCopy)}>
      <LinkIcon />
    </button>
  )
}
