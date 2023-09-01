import {
  Routes,
  Route,
  Navigate,
  useNavigate
} from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

/** Route list
 *
 * Props: currUser (context)
 *        login function passed from parent
 *        signup function passed from parent
 *        
 *
 * State: none
 */

function RouteList({ currUser, login, signup }) {
  // const navigate = useNavigate();
  // if (!hasLoaded) navigate("/");

  // if(!hasLoaded) return null

  return (
    <div>
      <Routes>

        <Route path="/" element={ <Homepage /> } />

        {!currUser  &&
          <>
            <Route
              path="/login"
              element={<LoginForm login={login} />} />
            <Route
              path="/signup"
              element={<SignupForm signup={signup} />} />
          </>
        }

        {currUser  &&
          <>
            <Route
              path="/companies"
              element={<CompanyList />}
            />
            <Route
              path="/companies/:handle"
              element={<CompanyDetail />}
            />
            <Route
              path="/jobs"
              element={<JobList />}
            />
          </>
        }

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RouteList;

