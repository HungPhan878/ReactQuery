import React from 'react'

//scss
import styles from './Loading.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Loading() {
  return (
    <div className={cx('loading-wrapper')}>
      <div className='flex h-56 w-56 items-center justify-center rounded-lg   dark:border-gray-700 dark:bg-gray-800'>
        <div className='animate-pulse rounded-full bg-blue-200 px-3 py-1 text-center text-xs font-medium leading-none text-blue-800 dark:bg-blue-900 dark:text-blue-200'>
          loading...
        </div>
      </div>
    </div>
  )
}
