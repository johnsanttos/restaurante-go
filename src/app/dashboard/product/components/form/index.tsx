'use client'

import { ChangeEvent , useState} from 'react'
import styles from './styles.module.scss'
import { UploadCloud } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/app/dashboard/components/button'
import {api} from '@/services/api'
import { getCookieClient } from '@/lib/cookieClient'



interface CategoryProps{
    id: string;
    name: string
}

interface Props{
    categories: CategoryProps[]
}

export function Form({categories}: Props) {

    const [image, setImage] =useState<File >()
    const [previewImage, setPreviewImage] = useState<string >()

    async function handleRegisterProduct(formData: FormData){
        console.log('Chamooou')

        const categoryIndex = formData.get('category')
        const name = formData.get('name')
        const price = formData.get('price')
        const description = formData.get('description')

        if(!categoryIndex || !name || !price || !description || !image){
            return
        }

       const data = new FormData()

       console.log({
        name,
        price,
        description,
        category: categories[Number(categoryIndex)].id,
        image
      });

       data.append("name", name)
       data.append("price", price)
       data.append("description", description)
       data.append("category_id", categories [Number(categoryIndex)].id)
       data.append("file", image)



       const token =  getCookieClient()

       console.log('Token:', token);

       try {
        const response = await api.post('/product', data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
        
        console.log('Resposta:', response.data)
        alert('Produto cadastrado com sucesso!')
    } catch (error: any) {
        console.error('Erro detalhado:', error)
        alert(`Erro ao cadastrar produto: ${error.response?.data?.message || error.message}`)
    }

console.log('Produto cadastrado com sucesso')

}


    function handleFile(e:ChangeEvent<HTMLInputElement>){
        
        if(e.target.files && e.target.files[0] ){
            const image = e.target.files[0]

            if(image.type !== 'image/jpeg' && image.type !== 'image/png'){
                console.log('Apenas arquivos PNG e JPEG são aceitos')
                return

            }
            setImage(image)

            // URL.createObjectURL(image) gerar preview da image
            setPreviewImage(URL.createObjectURL(image))
            console.log(image)
    
        }
    }
    return(
        <main className={styles.container}>
            <h1> Novo produto</h1>

            <form className={styles.form}
            action={handleRegisterProduct}
            >
                <label className={styles.labelImage}>
                    <span>
                        <UploadCloud size={30} color='#fff'/>
                    </span>

                    <input 
                    type='file'
                    accept='image/png, image/jpeg'
                    required
                    onChange={handleFile}
                    />
                    {previewImage && 
                    <Image 
                    src={previewImage} 
                    alt='Imagem de preview' 
                    className={styles.preview}
                    fill={true}
                    quality={100}
                    priority={true}
                   
                    />
                    
                    }

                </label>

                <select name='category' 
                className={styles.select}>
                    {categories.map((category,index) => (
                    <option key={category.id} value={index}>
                    {category.name}
                    </option>
                                ))}
              
                  
                </select>

                <input 
                type='text' 
                name='name'
                placeholder='Digite o nome do produto' 
                required
                className={styles.input} 
                />
                <input 
                type='text' 
                name='price'
                placeholder=' Digite o preço' 
                required
                className={styles.input} 
                />
                <textarea 
                placeholder='Digite a descrição' 
                name='description'
                required
                className={styles.input} 
                />
                
               <Button
               name='Cadastrar produto'
               />

            </form>
        </main>
    )
}