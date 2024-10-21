import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  const el = useRef(null)
  const typed = useRef(null)

  useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: false,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div className="-mt-1">
      <ul id="bios" className="hidden1">
        <li>
        宇宙是一个假象，是不是。  <br />
        我不相信当代科学。  <br />
        除非有一个人骑马一直朝前走， 路过所有的草原，海，山，爱情，  <br />
        相遇，  <br />
        别离，  <br />
        城市和岁月，  <br />
        最终回到你身边，  <br />
        这样我才同意你球可能是圆的，  <br />
        对不对。
          {/* <br />
          <br />
          Enjoy traveling!
          <Twemoji emoji="clinking-beer-mugs" /> */}
        </li>
      </ul>
      <span
        ref={el}
        className="tracking-tight text-neutral-900 dark:text-neutral-200"
      />
    </div>
  )
}
