import animateScrollTo from "animated-scroll-to";

export function gotoSection(sectionClass: string) {

    try {
        const section = document.querySelector(`.${sectionClass}`);
        if (!section) {
            console.log("Section doesn't exist");
            return;
        }
        const sectionController = document.querySelector(`.${sectionClass}-controller`);
        const refBar = document.querySelector(`.${sectionClass}-bar`);

        animateScrollTo(section).then(
            () => {
                removeAllActiveController();
                removeAllActiveRefBars();
                refBar?.classList.add("w-[70px]");
                sectionController?.classList.add("font-[800]", "text-teal-300")
            }
        );

    } catch (e) {
        console.log(e)
    }
}

function removeAllActiveController() {
    const sections = ['about', 'experience', 'education', 'project', 'testimonials']
    const controllers = sections.map((section) => section.concat('-controller'))
    controllers.forEach((controller) => {
        const element = document.querySelector(`.${controller}`);
        if (element) {
            element.classList.remove('font-[800]', 'text-teal-300');
        }
    })
}

function removeAllActiveRefBars() {
    const sections = ['about', 'experience', 'education', 'project', 'testimonials'];
    const refBars = sections.map((section) => section.concat('-bar'));
    console.log(refBars)
    refBars.forEach((bar) => {
        const element = document.querySelector(`.${bar}`);

        if (element) {
            element.classList.remove('w-[70px]')
        }
    })
}

export function activateSectionRef(sectionClass: string) {

    try {
        const section = document.querySelector(`.${sectionClass}`);

        if (!section) {
            console.log("Section doesn't exist");
            return;
        }
        const refBar = document.querySelector(`.${sectionClass}-bar`);
        const sectionController = document.querySelector(`.${sectionClass}-controller`);

        removeAllActiveController();
        removeAllActiveRefBars();
        refBar?.classList.add("w-[70px]");
        sectionController?.classList.add("font-[800]", "text-teal-300")


    } catch (e) {
        console.log(e)
    }
}