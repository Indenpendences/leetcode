### các phép toán cơ bản trên cây
1. tìm cha của mỗi đỉnh
2. tìm con bên trái ngoài cùng (con trưởng của mỗi đỉnh).
3. tìm em liền kề của mỗi đỉnh

<!--------------------------------------------->
                A
            B    ||     C
        D      E ||  F     G
### Preorder: A, B, D, E, C, F, G : root-left-right
### Postorder: D, E, B, F, G, C, A : left-right-root
### Inorder: D, B, E, A, F, C, G : left-root-right