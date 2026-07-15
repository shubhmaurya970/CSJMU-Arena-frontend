export function navigateWithLoader(
    navigate,
    setShowLoader,
    path,
    delay = 900
) {

    setShowLoader(true);

    setTimeout(() => {

        navigate(path);

    }, delay);

}