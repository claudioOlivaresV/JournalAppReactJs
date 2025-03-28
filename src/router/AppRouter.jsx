import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useCheckout } from "../hooks/useCheckout"

export const AppRouter = () => {

  //custom hook
  const { status } = useCheckout()
  
  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <>
      <Routes>
        {
          (status === 'auth') 
          ?  <Route path="/*" element={<JournalRoutes />} /> 
          : <Route path="/auth/*" element={<AuthRoutes />} />
        }
        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </>
  )
}
