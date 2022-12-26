import Favicon from '../componentes/Favicon.png'
import Keyner from '../img/ko.jpg'

export const Body = () => {
    return (<>
        {/* 
          como hacer un menos de wikipedia
        <a href='#ultimo'>
            <p>quien soy ?</p>
            </a>
        <h1 id='ultimo'>hello people como ta ?</h1> */}
        <Nav />
            <div className=''>
                <Contenedor />
            </div>


    </>)
}


const Nav = () => {
    return (<>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <img src={Favicon} className="mx-2 rounded" alt='logo' />
                <a class="navbar-brand" href="#">Portafolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto px-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>)
}

const Contenedor = () => {
    return (<>
       <Presentacion/>
    </>)
}

const Presentacion = () =>{
    return (<>
        <div className='row'>
        <div className='col-md-6 border border-secondary p-5 row grid'>
           <div className='col-md-6 col-sm-12 text-center'>
           <img src={Keyner} alt='No t la foto :/' className='img-fluid rounded-circle border border-secondary' width={'200px'}/>
           </div>
            <div className='col-md-6 mt-5 text-center'>
                <h2 className='H'>My name is :</h2>
            <h3>Keyner oswaldo de la hoz hincpie</h3>
            </div>
        </div>
        <div className='col-ms-12 col-md-6 col-lg-6 col-xl-6 border border-secondary text-center'>
            <h1 className='K'>Conocimientos en diferentes areas como :</h1>
            <h3>Arduino</h3>
            {/* <img 
            className='rounded' 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAdVBMVEX///8AdIEAbXsAZ3YAaXcAcX4Ab332+vvp8/TS4OIAa3oAZnWiw8g/i5Wvy8/R4+WavsNMkZtxpa1WlZ650dWNtrxem6Pe6uzy+fnH297C1Ng/h5Ll7/AAYXGBrrWqyM0efYl6qrEbfIhon6cAWmuTusCHs7mY9fmyAAAUgElEQVR4nO1diZKrOpIFIQkXeN9d3rB59v9/4rBqAaUWEHciZupEd0dfuwzJQUqlUtLJIBiB+Lb6uez3++Vyv7/8nOIx1xqH2akwZFnaURoyc7/AZfsm2fZnuAXxafndZQRjnCSoRoJxRLLjYX8bftkhOC0fmzcSDUlwhMNr/nGwJN7co912h++7QTac948swYhSEvZAKE0w3a1HsO2A+HJYoMIShSEhIaUlm8/F6kLh/VH9n+89c7bidLimidIG0RyEab6fuBvd5pvIbAnFePc09qNjOg8On8MyCJ73rZMVp28YmYxgxiTJbj/4eU2YrbMI2VqCouv8rH2udBEEaXJPsyDYpfaOKH5mEbUzgrGCt6uxD6/CfmHNB2Nl9wtf75MWLw/v4mN6CS73p6UVtxdys6IGxdnSCwsc5wNJBlhCcLiGuvKxbBn4WHiSSxDfX1ZmnI6ODUQwJSGgKQNw2+KhloQIfdWWbNKiX6Giqx+Lf6Q2zuR2TAebUZmSfDyRcsvHWULxQWXJNj0FQbL4vRf9Z9aMPTrEr2hAO+2QQtceCDlvPVhC5v0LL9PCvPQabO6nYsgxDgrzZNR7YaaEo4efjx9Lkqzn8mNE4+CxDk7Ff0NqMON0xT7MKBFtRoW1l4JVPyDpttt7nvdr8/8Wd8Nw8MGjW6pgCv4MJuR8HN9nOCjpxrSve7g8B+dlaPAks2viz4wSKDsNY2Q5ZNjVIe2OtPvwXsLQvX+HBCJ6DGso8S7ybUjxdrpB6uXzME2Ivv7tKJAstKG1Chfixa12QBJNOKvGznOnaUGR1dyU45BOY0iYurXYOJvizdSIDi6WbCZ6NQWwy6R3Fnp3IwIS+zzNLZzu1RQOZWNtyIlMyUjReXq+DcDF90jTNWRhy4j/oaYDQq1G4/lUboSBXs1WFLhNzkiByMLJTjPmybBqJzO3XkMIodV/HG3BxjnP1nEu0RriZgk1+5PY2rOWmWcUZotdnm/zXRYmQGIYQGrIXh3thxpCEcYk2xV25LtNFiKc2Ld0lJsouVpdi6AoPK5/b2LcdV4tvxuKrY2JFNN0jp3lLI9QnFxfz4vosOPbZZ2/izdkdQVsCApyC0vKTOYTmtau1ovUkhUdJ3aMFJZkhwuQn5otc2yVT4i0fXhu9mgUb5b6JFn83NjlJeG+c7RhhETZ2pBw+D0mFlfCmvHvZGQEoYdN2uP2pTYPBb0fm7ZKI6v0//kTGp0SecO/N7lWRO2zqE+zKUU7UY7FD/NYQ5OD9fzxacw+UdDF5vrmTjGQ4R5sirrNro1t1dWSOTV0ZCgk+NWbgt0zhQejTyG0F9vvTYyQKHfdGhBvDRelaoq1vYbSIWtUM2P2p9ePV6YoHvXzyRa46CeQ9Kj60Uv3G+Se+qmxNyWAOuHjzLTw7ZZbEHDUeiis8Gra0SYyr/dAiHcGZ5lI1870lND3wPRtYJhFqkYdXdiqD2aMphjy/OLVj/o2FRmjbx1WugkH6q2+7TXvMhm5g+ZkGNwx89tzfYvSzwHMuOkMSboeVtNg0fC22iBeaIdj1mhPWkYIHb014/yGH5N2nIOmkSSjGQlMM/02VNK2JutcnA5nzS0SeQSBG0nkZ9fMQTsa42qE1zoSevWy/WAG30NuJr/gSxznWQXoZ5S4aAFL3V+gYXsN+9B0TiSSvoAaSTI0CuhjqR0DF8FM52+QMpQaBDg6FgcdMCYh9mn9MbaU3M83uhHSHyNFTApzL/wR1MGI152a2naijRl89ZoaoOMUQliIEW+OpIFFhkrJlu1yiyXATsGTBHsgs0F8NtcKnyE7eGjm24wD1HVYuAYNfsnAqZ4GW/e9RCQ09958IeBrNgO6V9JO94FXh/yNNhwb50Vem1BxUa7fNEAWq99QZEoap/UL9BvTRrZh0ITUStisC0pBBLXZEAB5WFx/DYw3aPjWMh1mbrsj7PYtOVMCNZOkfgGQMRMdlbi4DDvUbvh1pgRqrHVQf1MTRu32kg/A12FpU7OcIMKdkrnaz5Os/HKv/jLyMQEGHsDaxaaWRrhTEgM9B5ejrNqV1HRNg7PtSIxtU0bulECRR+VM1FM+Oo1zraFL4Yk2WM+wBlACxKfVc6vZ0q2TjodhEa0Bsg4VB1ASA5QUEftNPQCQwY9rBZvgBNuvHA2gBOgdpcO4KNmCV0n9wLik59JthlHyAcKxIHgqfR0amQs3wrA6Ebp0m2GUqNtCGN0AsvAk5xQFnE3BSeLyUoZQMlP7ePwTbJWURGDomi2scDVNTeZ6TkxBwEqyQ/rpW/wmg9sa0HH2wVHtZcALpcQK2LhrX7/UaVoYWEXi3TrGC9Ac+1Wvb6Kn2vESeIus5QzFfJBBO9cxtv4fy2RUBFOSqwOydZCpPtekob1REuw0HhaZ5pweKHko70+/wVv1OYHHYH+UABFRif6a9QSUrNWUPNSpAU279UdJsIW9ifG3HihRT4bJC6AEzgx4pARIS1Qu7v8pJQdw+cgcuE5GCdRxyL/oOECsVD2IMVL04UsgStQjDpzf80eJOiKq7288J+OBkq/avR6ChepzAq+v/Zu4xHg2xQMlau9O58FO/a6mp8SwejE9Jep1+cK1q+c4GLzQf5EVjAIPH3220bSudpHskB6OiN/8B1OivnHxLtU9Ck6qxZYwMAIOwC00r7dnhzQrKYYGKzuAhHQxE1YPRci3Xk8XxqNQTltbhiQHVgAlM2D5c7pVnBpr81qOQ55xECXASg6F9m7ZrikNhLHblHDYuDCEEnVer8zTAF3K1JXHweoEoSY46mIIJWoTqgmvOpVjMc0Yjq/d2ha2tmEAJcAoXs3B1ZkUrxv3OrjYnhLHtieABlCizpbU29UAN4Mn6zln6yVh61XYAZQAXbfamgXsjTVncYbCfpU8tNlRVF3SmRJgn1EzuYIsHPzMemi2nfYR2bkTd0qAXba0DpqBVSazKsAgLN02Ndrt6XCmBNrn2axfLXW7T3zjx3XrK7GJTpwpgRYbm/15M2AAmKKZaA46QJRkFpd1pQQ6W8DS8MChggkiWHvdC+ERLcKBDCcMNofdoP36bEEOGIYn2NN4HSJtZJbTCOKzAPO2Q3DfAlvkBJOgvqN6h+FXBB5+/lQN6EbCZBdad9PkG4dAuzNa9x222APuAHAPlJAlAg9tJT67jlaThOaaLx212AyAu42YBIdt8acov9GHaHrJA4/tBN6eLQ2xkIMt3p4vd6L3I+VOeXUWuDXXTR9eA80mDvHPYpASTwGbQeEQVX5NO0Inng4HwQ4tkScP4KEdWzU2PQznyZtOrBfZQV5OxeoEdOS/hJuJj2Nke4PqAGp6p/58PQ3H78XdwjnfpDvD1CyrjObEJKPHjxDqduGUCrpj1w1ymBFFrK55jzQb02TjhSEbj4RIzLAEGI1zsrpBT3EUSjdpJyOa7K9Jh0iKB02pezRCv2Smc/HKgz/gifLSbMtUTh+5KT3SOc1o2jY9XOXmolXAU+ZV9f4eH4d0HqPsTz/lbDw3i7JB4eNL+3iJOq2qX0qg1Dl9ctuYM2h9ZTWjzhzBzopZwc9br6ACRRoGHSK8cOrHs21qTo6oOqT53CyJ3HTVZrnBlATi2KRHSKKt9euZvWyqtqhVNC20vCn6Wi+Pxl+TKZrB3SBFVAkjWrWUVW4lXJmoF+Njm7PEFOdWpsweRjlPbY5KHyqVINHCVFhsNs/samEkkCk6eR7RlGxuarW/FrV9DNM4i/dDEl25tdt8Y6uCqxElsVRrJgnezOHNQZctsem9hsm+3VlvmuDrt18p8LTchvaFwbQyLdZK+ARhkj9X3Vc0u3w2dgK45g2lRonE1hSaROi6e3zmz+V+/1x/jxm2F0kONb3GkZOw9LU4eu8e6+d+v3zOP4/jlZhL+rWw0GjRStF0QAilqC40qSz2qIExJaSTQFPaQpuCl9TJFCv1uoFSNG6wSBzGg1Y4HBHZbQYwS9CORmp1cM+QrfWAyDbdPjUnFqfcariq87sitd8wMm0xCYdUw7Sd2Gl6v5+QE7RwmJ/oZ/SjQKz0czhWk5niqKZ7vk7kUNzTYrP3JP6eUucSV4+Jin4NyP/otZaHAQ+RoL6YUpUDMFD5ee6zfGAJYi3RIiM+em4o/VqGtjhlXvsxXgwuebn32lDwbsSKw9dfxUtKx+y3jrfeLKFk3IYzX3VRSdSrReqIlR9LxhsSBE8yvvcQvPGgI7QfXyyWOOaPIXxHFvIl0cKTGsp8HCkEZ84hAIDzY3Bp8jJduxjq3hWYh4NL+RWE+Ny1ev7SYeEsxUfPejlLy8Ru1xCvb6bGM3OuHU9w+JngvMZP7lBwrTYkoa9JRNF+XsjBq5AE597fS4P4aV3jrExDpptpjgNUuGxDbJHGIxST3JcnU2M23yTm/GphCN0ZqqWNx+qz0RUtLMsKJpuPv42QMOLfVxYlUFxb1TdcHKZqqF2sntusuCFCgj4xLTPTGF23z6n1x0ScL5/jO8FJlQ+ntPofVNiB6eL1Tw2pMLvs14/tbrG4Fljs8sdneRk8iRmF+HRZrr+v7fF4zLeP73r5e/IvBP6HP/zhD3/4wx/+8Ic//OEPf/i/j3jGAH9Toz/xjE1/UEB5/Vj+8Ny9lQSNmezjzq1v+8+rwPd5GTBb3qS4QVdK73nHXZCNnK1Zy38SReHuu+8Y0d4gXSiu3XyYpxhEmpV/sWJ3uotLzvvm47u492p2CHFCK6Akylwzw4KUVrdMtUreg1AcCnfvH7Mtt4UupM3qrTykpLvUXrv5UKMc3JyPECTjRF30toyHqNbTWXwhKHKTjxNLg3TKbgGKJyHiK/KA5G4SCg3OOyWibkSfkpniAAoKXbJeopJWR5cToiQM03YtHDyMHfEW550SsUxyj5KbMqdPXGoDixfoyKTAlLAjR/D5dMSOA/mnRJCW6FICSafYlAVscJEW6uWeo6EkpLGBEq7R4p+SskgHQAl4iMS+yItcb0quec8pqb23eC6iEWqdS38iH5zArZUWlOSINhAeokWfEl6js0OJIPKAivEvEhbprKuKdaiU9nYxSujrUSLPhD1cRKaEFt+/tjvpGEgjSGlDyefYIGci1++8/ezVo4QXLOtQwg7p0ffyFgezC9+Kp6lDIKG9EXtUJSVR+8mJC1HiH4mS9k9OD2FQ/1pTwtGKXHV1ZmRK2LcyJcwN8IONT/Y7ywqFjUY8bRVhpII5nBJ2sZhRUtvQo6SwnbcTOhklrIvLlLDhU+glTDU7sVsybo5+oFYniYpHIxSUcBnIenRSUCJ47NruSShpj6XJlLTGiT9mZZTs9Poa4bHiCk0nlA7AqShhFRFrmVYVJfzAek3wJJS0xzklSpiSqVh7L249rp1aWqPkX1yhffuiX1ZRwjivTVZSwup61X8zDSWN25MoYdZIMScr+hIFFmi8ZdHAW8lLkV8VJUwas34WJSVc9A5NQQkRSJApYdGNpJzOBOdsdGVbD4JiVvJP7DkqSviom4OU8GLOleqBX0roth31qmhRooT1WEkpjgk1JhZbLpoWXt29vRwPDJWUMP9d64OqKWkZqd+WX0rIdtU4hyqIkihhw6FUVo21HWQx5DRNqnq6toqdUMpPQQlX6KyHNDUlLGCqxnTPlOTs7ZVtUKKEt07xlyxAtxDKbn1x1aDYLbkpfUpWPHqtAx81JSygq67snRLWh3KZkjOjJBF/yeIGCwXk1qy0+lf7cFz1hAf063mJh7CZu0k3mSj5nYISNrcrhkc1JWgoJc3dm5u3tvDmJUz76qO5wqyumWT8+1ZSNo1WW6OIjURKuC6nNKN3oaSxqhFSfvaM1CQHWgHs/x1KmCIl/vl1aSXGc0Lt1ZrpAismx6ZHMCVMmO7fu9eKkhlzfBdkpIS7V6M4WSuW2P6+nZazsQqkhGfMTIPwBHFJFQ+1b54excBNPeKwQdg872Mz1k7yhiXqIUqErIqaEpbhrjw/o0R8yJGUsGLSLOaA4xIWqmHTNt1Lb9LQ5RjSJBeWAPQBfR0Ke6akfmFdGcGKEubDIjF05wG9aT0HqPYQ8kkTp6RatuLZI35pJSXsd3UiiwW8mfA363GtpCcj2JnjiGkfNu1DgQEQITwlxx4N386z2Zkn8XjKTp8cqP0Zy+uIRVBfzBm4UtL84Cmr0sgzYTFOZWt3xpImkEZ7ddsOJXXXXDIj+ERTRQmfs9azr5eqL7f80u5JXltKOuJFnXyJkGdl6QyjkjpQxry2/aKihLcrrnSooOTGTG1eC58887QWeyG9WMGakr30TuWsmphnZcsYxhQ96waIg/WMl5ISvkKRtn21R8l5zVfbGmZ5q+FrIgtlr3eiRJbMqylhIszCqobs6zVggRl6MiyZxyZKSrhLY/byFnAo8N1eEz4SsCw5/witq3WMFVe2aZa8l99DjQ+zIfs0Hx3WakqkIbOmhNdMQpuK69mXBwSmeXD7LJJsIatGXL+7HiW8wmir1iIvbclrW2ytRRjbEA6zd8KP7bWlDHPcrmPxK7SfIGlpS/DHYn2GZv7CdUoJTrKMistKBkbYb6WUPGvi9ac9SmL+crMuJT1wRSa5TILsFZsr2y+ACpSsBI2ChpKTqMgivSCjZNa5/amcfOPXUFIilAZuEuQwJaJg6wGScYvaWccgSsRaL+0s9wAMpOaKGSyJnkhLYDz2PSkpEUvdaSkhsmoXoADFtTSGUSKUPWcTf7VuNDLXVWFBtqyAypiqEvWKRCN3C/XoCWy5ia6dAW+neHkk5Q1pGCWCzD/PhWwVkh+RWd2ezZqoLHx2k0YsBSWCW6BqSghB0aafCp93D/0SnAnj70BKuLCikB7ad85/E2SjlrG8N4V37p0zrWFblOe/U7nFrv0H713btK3Zcy9b/fqeCChmQijbLpWzq/jzjlA1JJWHJhO8k9xdniYgoqyipLlTJAlif9vfSdv31hm7FUX4vbZZHz/9tIihL4rnmrF/CE/28yN+evuRcNLONW/Lb75ZLBa71/oC3lcF6cZSl+TmyMtWt+UjX1yvi/yxhGLW/wE3c0UgVP8bowAAAABJRU5ErkJggg==" alt="Arduino" /> */}
            </div>            
        </div>
        <div className='con rounded '>
            <div className='container mt-3 py-3'>
                <Servicios/>
            </div>
        </div>
    </>)
}

const Servicios = () =>{
    return (<div className='text-center'>
        <div>
            <h2>Servicios</h2>
            <p className='px-5 mx-auto col-md-6'>Cuento con un gran amplio recorrido de aprendizaje, gracias a eso tengo conocimientos en varias areas algunas de estas son :</p>
        </div>
        <div className='row'>
            <div className='col-md-4'>ta</div>
            <div className='col-md-4'>asd</div>
            <div className='col-md-4'>hgfd</div>
            <div className='col-md-4'>ta</div>
            <div className='col-md-4'>asd</div>
            <div className='col-md-4'>hgfd</div>
            <div className='col-md-4'>ta</div>
            <div className='col-md-4'>asd</div>
            <div className='col-md-4'>hgfd</div>
        </div>
    </div>)
}