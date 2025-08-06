// 'use client'

// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'

// interface Props {
//   children: React.ReactNode
// }

// const ProtectedRoute = ({ children }: Props) => {
//   const router = useRouter()

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (!token) {
//       router.push('/signup') 
//     }
//   }, [router])

//   return <>{children}</>
// }

// export default ProtectedRoute
