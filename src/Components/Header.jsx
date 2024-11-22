import React, { useState } from "react";
function header() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSignUpClick = () => {
    setIsFormVisible(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <div className="flex mt-5">
        <div className=" block md:hidden">
          <img
            className="w-8 ml-3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEX///8AAADy8vL5+fkrKyuioqJ0dHSCgoK3t7fg4OC+vr6lpaUSEhJUVFS0tLT8/PwMDAzR0dHHx8eKiopdXV1qamrX19ccHBw9PT3p6eklJSV8fHxPT0+ZmZllZWVDQ0P+8iljAAACEElEQVR4nO3dC3KCQBBFUYafIAqKil+S/e8ymmQJ3dNVr+7ZwS2JyqRtigIAAAAAAAAAAEDOVJXZVJNrStmP7a3O5NaOfemWUh03KbPNsfJpKZs6d0tKdePy4pTZX5Y/G4eaKqjlXWN/pQ1RLSkN1i3lIS7mYH2hhV1kHxvjmMiWlGxb5tiY2TTmFBtzMo05x8acTWNesTEv05h9bMzeNOYSG3MxjWliYxrTmD42pjeNkfrQLLrIls44ZrrFtXybnwUs16iW62LdUkxdwE3zR905HNJUY8iVdhtdjjSmuc1+h3ZoZ6/Ds/v2+ciZ8nhu704pH+WyHZpMhu3idwb4r8rGuwQAAAAAAAAwk3Os0bmkPw7PNpPncOwde/oh8zzAa+idzs3LLmAa4DX6jDWuIf9tqlePscZ1F9GS0m61/8OZg1reNbYDWm9VWMu7xvpNIHTexHbaRGtCY4mNsZ0EWGNjVtOYr9iYL9MYqUlAqRipy0zqDUDqrVnqQ1Pr68yk9EVT6hZA6+ZM6rY56EBj33kN0EUcNTmlFFqHgL89MsezAAAAAAAAgCGdnwML/VBb6Cf0SssNlNZOSC0EUVrVIrVER2q9UWSL9YSG1EowqWVtUmv0pCYBpVZPSi0FlVrXKrVIV+pDU2v5tNRacKmF7Vqr9KUecqD1+AmtB4MUUo9s+RB6mA4AAAAAAAAAAECIH6W6RDvCMeEmAAAAAElFTkSuQmCC"
          />
        </div>
        <div>
          <img
            className="ml-10"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDgwIDMwIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9Il8yMDAyMDQ2NTA4X19hIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjIxIC0uNjczNTMgLjI1NDUgLjA3OTM1IC41MTIgMS4xMDkpIj48c3RvcCBzdG9wLWNvbG9yPSIjNjQyMEZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNjQyMEZGIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iXzIwMDIwNDY1MDhfX2IiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguNTg0IC4xNjIxNSAtLjM3NzEgMS4zNTgyIC4wMjQgLjY2NikiPjxzdG9wIG9mZnNldD0iLjI1IiBzdG9wLWNvbG9yPSIjMDBDNENDIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBDNENDIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBpZD0iXzIwMDIwNDY1MDhfX2MiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguMjk0MjUgLS43MzkgLjM1NTUgLjE0MTU1IC40MjcgMSkiPjxzdG9wIHN0b3AtY29sb3I9IiM2NDIwRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NDIwRkYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJfMjAwMjA0NjUwOF9fZCIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC4zOTE1IC0uNTk4NjkgLjQ3NDMgLjMxMDE2IC4wMjggMSkiPjxzdG9wIHN0b3AtY29sb3I9IiM2NDIwRkYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NDIwRkYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGlkPSJfMjAwMjA0NjUwOF9fZSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDM0LjU5MyAtLjEgLjIpIHNjYWxlKDEuMDMyNTUgMi44MDY4OCkiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEM0Q0MiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMEM0Q0MiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PHBhdHRlcm4gaWQ9Il8yMDAyMDQ2NTA4X19mIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBwYXR0ZXJuQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PHBhdGggZmlsbD0iIzdEMkFFNyIgZD0iTTAgMGgxdjFIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19hKSIgZD0iTTAgMGgxdjFIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19iKSIgZD0iTTAgMGgxdjFIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19jKSIgZD0iTTAgMGgxdjFIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19kKSIgZD0iTTAgMGgxdjFIMHoiLz48cGF0aCBmaWxsPSJ1cmwoI18yMDAyMDQ2NTA4X19lKSIgZD0iTTAgMGgxdjFIMHoiLz48L3BhdHRlcm4+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjXzIwMDIwNDY1MDhfX2YpIiBkPSJNNzkuNDQ0IDE4LjA5NmMtLjEzNiAwLS4yNi4wODgtLjMyNC4yNzItLjgyIDIuMzQtMS45MjggMy43MzItMi44NCAzLjczMi0uNTI0IDAtLjczNi0uNTg0LS43MzYtMS41IDAtMi4yOTIgMS4zNzItNy4xNTIgMi4wNjQtOS4zNjguMDgtLjI2OC4xMzItLjUwOC4xMzItLjcxMiAwLS42NDQtLjM1Mi0uOTYtMS4yMjQtLjk2LS45NCAwLTEuOTUyLjM2OC0yLjkzNiAyLjA5Mi0uMzQtMS41Mi0xLjM2OC0yLjE4NC0yLjgwNC0yLjE4NC0xLjY2IDAtMy4yNjQgMS4wNjgtNC41ODQgMi44LTEuMzIgMS43MzItMi44NzIgMi4zLTQuMDQgMi4wMi44NC0yLjA1NiAxLjE1Mi0zLjU5MiAxLjE1Mi00LjczMiAwLTEuNzg4LS44ODQtMi44NjgtMi4zMTItMi44NjgtMi4xNzIgMC0zLjQyNCAyLjA3Mi0zLjQyNCA0LjI1MiAwIDEuNjg0Ljc2NCAzLjQxNiAyLjQ0NCA0LjI1Ni0xLjQwOCAzLjE4NC0zLjQ2NCA2LjA2NC00LjI0NCA2LjA2NC0xLjAwOCAwLTEuMzA0LTQuOTMyLTEuMjQ4LTguNDYuMDM2LTIuMDI0LjIwNC0yLjEyOC4yMDQtMi43NCAwLS4zNTItLjIyOC0uNTkyLTEuMTQ0LS41OTItMi4xMzYgMC0yLjc5NiAxLjgwOC0yLjg5NiAzLjg4NGExMC4yMzMgMTAuMjMzIDAgMCAxLS4zNjggMi4zMzJjLS44OTIgMy4xODQtMi43MzIgNS42LTMuOTMyIDUuNi0uNTU2IDAtLjcwOC0uNTU2LS43MDgtMS4yODQgMC0yLjI5MiAxLjI4NC01LjE1NiAxLjI4NC03LjYgMC0xLjc5Ni0uNzg4LTIuOTMyLTIuMjcyLTIuOTMyLTEuNzQ4IDAtNC4wNiAyLjA4LTYuMjQ4IDUuOTc2LjcyLTIuOTg0IDEuMDE2LTUuODcyLTEuMTE2LTUuODcyQTIuODg2IDIuODg2IDAgMCAwIDM2IDkuOTE2YS43NTIuNzUyIDAgMCAwLS40MzIuNzI4Yy4yMDQgMy4xNzYtMi41NiAxMS4zMTItNS4xOCAxMS4zMTItLjQ3NiAwLS43MDgtLjUxNi0uNzA4LTEuMzQ4IDAtMi4yOTYgMS4zNjgtNy4xNDQgMi4wNTYtOS4zNjQuMDg4LS4yODguMTM2LS41MzYuMTM2LS43NTIgMC0uNjA4LS4zNzYtLjkyLTEuMjI4LS45Mi0uOTM2IDAtMS45NTIuMzU2LTIuOTMyIDIuMDgtLjM0NC0xLjUyLTEuMzcyLTIuMTg0LTIuODA4LTIuMTg0LTIuMzU2IDAtNC45ODggMi40OTItNi4xNDQgNS43NC0xLjU0OCA0LjMzNi00LjY2OCA4LjUyNC04Ljg2OCA4LjUyNC0zLjgxMiAwLTUuODI0LTMuMTcyLTUuODI0LTguMTg0QzQuMDY4IDguMzEyIDkuMzggMi40IDEzLjMyIDIuNGMxLjg4NCAwIDIuNzg0IDEuMiAyLjc4NCAzLjA0IDAgMi4yMjgtMS4yNDQgMy4yNjQtMS4yNDQgNC4xMTIgMCAuMjYuMjE2LjUxNi42NDQuNTE2IDEuNzEyIDAgMy43MjgtMi4wMTIgMy43MjgtNC43NTZTMTcuMDA0LjU2IDEzLjA2NC41NkM2LjU1Mi41NiAwIDcuMTEyIDAgMTUuNTA4YzAgNi42OCAzLjI5NiAxMC43MDggOC45OTYgMTAuNzA4IDMuODg4IDAgNy4yODQtMy4wMjQgOS4xMTYtNi41NTIuMjA4IDIuOTI0IDEuNTM2IDQuNDUyIDMuNTYgNC40NTIgMS44IDAgMy4yNTYtMS4wNzIgNC4zNjgtMi45NTYuNDI4IDEuOTcyIDEuNTY0IDIuOTM2IDMuMDQgMi45MzYgMS42OTIgMCAzLjEwOC0xLjA3MiA0LjQ1Ni0zLjA2NC0uMDIgMS41NjQuMzM2IDMuMDM2IDEuNjkyIDMuMDM2LjY0IDAgMS40MDQtLjE0OCAxLjU0LS43MDggMS40MjgtNS45MDQgNC45NTYtMTAuNzI0IDYuMDM2LTEwLjcyNC4zMiAwIC40MDguMzA4LjQwOC42NzIgMCAxLjYwNC0xLjEzMiA0Ljg5Mi0xLjEzMiA2Ljk5MiAwIDIuMjY4Ljk2NCAzLjc2OCAyLjk1NiAzLjc2OCAyLjIwOCAwIDQuNDUyLTIuNzA0IDUuOTQ4LTYuNjU2LjQ2OCAzLjY5MiAxLjQ4IDYuNjcyIDMuMDY0IDYuNjcyIDEuOTQ0IDAgNS4zOTYtNC4wOTIgNy40ODgtOC40MjQuODIuMTA0IDIuMDUyLjA3NiAzLjIzNi0uNzYtLjUwNCAxLjI3Ni0uOCAyLjY3Mi0uOCA0LjA2OCAwIDQuMDIgMS45MiA1LjE0OCAzLjU3MiA1LjE0OCAxLjc5NiAwIDMuMjUyLTEuMDcyIDQuMzY4LTIuOTU2LjM2OCAxLjcgMS4zMDggMi45MzIgMy4wMzYgMi45MzIgMi43MDQgMCA1LjA1Mi0yLjc2NCA1LjA1Mi01LjAzMiAwLS42LS4yNTYtLjk2NC0uNTU2LS45NjR6TTIzLjMyIDIxLjg4OGMtMS4wOTIgMC0xLjUyLTEuMS0xLjUyLTIuNzQgMC0yLjg0OCAxLjk0OC03LjYwNCA0LjAwOC03LjYwNC45IDAgMS4yNCAxLjA2IDEuMjQgMi4zNTYgMCAyLjg5Mi0xLjg1MiA3Ljk4OC0zLjcyOCA3Ljk4OHptMzcuNDA0LTguNWMtLjY1Mi0uNzc2LS44ODgtMS44MzItLjg4OC0yLjc3MiAwLTEuMTYuNDI0LTIuMTQuOTMyLTIuMTRzLjY2NC41LjY2NCAxLjE5NmMwIDEuMTY0LS40MTYgMi44NjQtLjcwOCAzLjcxNnptOC40NjggOC41Yy0xLjA5MiAwLTEuNTItMS4yNjQtMS41Mi0yLjc0IDAtMi43NDggMS45NDgtNy42MDQgNC4wMjQtNy42MDQuOSAwIDEuMjIgMS4wNTIgMS4yMiAyLjM1NiAwIDIuODkyLTEuODIgNy45ODgtMy43MjQgNy45ODh6Ii8+PC9zdmc+"
          />
        </div>
        <div className="ml-36  hidden md:block">
          <span className=" mr-10  md:hover:text-blue-400 cursor-pointer">
            Design
          </span>
          <span className=" mr-10 md:hover:text-blue-400 cursor-pointer">
            spotlight
          </span>
          <span className=" mr-10 md:hover:text-blue-400 cursor-pointer">
            Business
          </span>
          <span className=" mr-10 md:hover:text-blue-400 cursor-pointer">
            Education
          </span>
          <span className=" mr-10 md:hover:text-blue-400 cursor-pointer">
            Plans and pricing{" "}
          </span>
          <span className="md:hover:text-blue-400 cursor-pointer">Learn</span>
        </div>
        {!isSubmitted && (
          <button
            onClick={handleSignUpClick}
            className=" mr-10 sm:ml-72 bg-white border-gray-500  hover:text-blue-500 cursor-pointer"
          >
            Log in
          </button>
        )}
        {!isSubmitted && !isFormVisible && (
          <span>
            <button
              onClick={handleSignUpClick}
              className=" mr-10 bg-blue-500 text-white px-3 py-2 rounded-lg hover:text-black cursor-pointer"
            >
              Sign up
            </button>
          </span>
        )}
      </div>
      {isFormVisible && !isSubmitted && (
        <div className="bg-gray-100 p-4 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block">Username:</label>
              <input
                type="text"
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Email:</label>
              <input
                type="email"
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Password:</label>
              <input
                type="password"
                className="w-full p-2 mt-1 border border-gray-300 rounded"
                placeholder="Enter the password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {isSubmitted && (
        <div className="bg-green-100 p-4 mt-4">
          <span>SignUp Successfully!</span>
        </div>
      )}
      <div className="bg-slate-200 sm:mt-10 mt-20 lg:flex lg:p-4">
        <div className="lg:text-center sm:text-[30px] lg:text-[50px] sm:px-10 text-center lg:ml-20 lg:mr-20 lg:mt-48">
          Free Business Website Maker
        </div>

        <div>
          <img
            className="sm:w-[550px] sm:ml-20 sm:mb-10 lg:mb-20 sm:mt-6 rounded-[28px] transition-transform transform sm:hover:scale-110 lg:hover:scale-110 lg:ml-10 lg:w-[600px]"
            src="https://static-cse.canva.com/_next/static/assets/mobile_w900xh600_c8ebf4ae981683ec96dc942b0cbfc055c43b656e1c6c0e1549bfcb51d3738e27.avif"
          />
        </div>
      </div>
      <div className="sm:ml-10 sm:mr-10 lg:text-left lg:ml-80 lg:mr-80 lg:mt-20">
        Create a website for your business—no coding required. With our free
        business website maker, you can build a beautiful, one-page website in
        minutes. You’ll attract lots of customers, establish your authority, and
        drive visitors to convert.
      </div>
      <img
        className="sm:w-[550px] sm:ml-20 sm:mb-10 lg:mb-20 sm:mt-6 rounded-[28px] transition-transform transform sm:hover:scale-110 lg:hover:scale-110 lg:ml-56 lg:w-[1000px] lg:mt-20"
        src="https://static-cse.canva.com/blob/1110747/create_title_lead1x.7de916b8.avif"
      />
    </div>
  );
}
export default header;
